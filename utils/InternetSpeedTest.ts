const internetSpeedTestHtml = /* html */ `
  <script>
    // message formatter: "code:message"

    function sendLog(message) {
      window.ReactNativeWebView.postMessage("0::" + message.toString());
    }

    function sendSpeed(message) {
      window.ReactNativeWebView.postMessage("1::" + message.toString());
    }

    function sendStatus(message) {
      window.ReactNativeWebView.postMessage("2::" + message.toString());
    }

    function sendError(message) {
      window.ReactNativeWebView.postMessage("3::" + message.toString());
    }
  </script>
  <script>
    const downloadSizeMB = 100;
    const downloadSize = downloadSizeMB * 1024 * 1024; // 1MB
    const downloadUrl = "https://nyc.speedtest.clouvider.net/backend";
    // const downloadUrl = "https://librespeed.a573.net/backend";
    const maxGraceTime = 1_500;
    const paralellDownloads = 6;
    const connectionRetries = 10;
    const maxErrorSkip = 5;
    const compensationFactor = 1.06;

    const xhr = [];
    let running = false;
    let listener;
    let totalDownloaded = 0;
    let errorSkip = 0;

    async function addError() {
      errorSkip++;
      sendError("Download Error: ", errorSkip + " of " + maxErrorSkip + " errors");
      if (errorSkip >= maxErrorSkip) {
        stopDlTest("1");
      }
    }

    async function startDownload(i, delay=0) {
      let prevLoaded = 0;
      let downloadDiff = 0;

      xhr[i] = new XMLHttpRequest();
      
      xhr[i].onload = () => {
        try {
          xhr[i].abort();
        } catch (error) {}
        
        if (!running) return;

        startDownload(i);
      }
      
      xhr[i].onprogress = (event) => {
        if (!running) {
          try {          
            xhr[i].abort();
          } catch (error) {}
          return;
        };

        loadDiff = event.loaded <= 0 ? 0 : event.loaded - prevLoaded;
        if (isNaN(loadDiff) || !isFinite(loadDiff) || loadDiff < 0) return; // just in case

        prevLoaded = event.loaded;
        totalDownloaded += loadDiff;
      }
      
      xhr[i].ontimeout = () => {
        addError();
        sendError("Download Timeout")
      }
      xhr[i].onabort = () => {
        if (!running) return;

        addError();
        sendError("Download Aborted");
      }
      xhr[i].onerror = () => {
        addError();
        sendError("Download Error")
      };
      
      xhr[i].responseType = "arraybuffer";
      xhr[i].open("GET", downloadUrl + "/garbage.php?cors=true&r=" + Math.random() + "&ckSize=" + downloadSizeMB);

      setTimeout(() => {
        xhr[i].send();
      }, delay * Math.random());
    }

    async function startDownloadStream() {
      for (let i = 0; i < paralellDownloads; i++) {
        startDownload(i, i * 300);
      }
    }

    async function stopDownloadStream() {
      for (let i = 0; i < paralellDownloads; i++) {
        try {
          xhr[i].abort();
        } catch (error) {}
      }
    }

    async function startStreamListener() {
      let startTime = new Date().getTime();
      let bonusT = 0;
      let graceTimeDone = false;
      let retries = 0;

      listener = setInterval(() => {
        const t = new Date().getTime() - startTime; 

        if (totalDownloaded === 0) {
          retries++;
          if (retries > connectionRetries) {
            stopDlTest("1");
          }
        }
        
        if (t < 200) return;

        if (!graceTimeDone) {
          if (t > maxGraceTime) {
            if (totalDownloaded > 0) {
              // if the connection is so slow that we didn't get a single chunk yet, do not reset
              startTime = new Date().getTime();
              totalDownloaded = 0.0;
            }

            graceTimeDone = true;
          }
          return;
        }

        const speed = (totalDownloaded / (t / 1000));
        sendSpeed((speed * 8 * compensationFactor / 1000000).toFixed(2));
      }, 200);
    }

    async function stopStreamListener() {
      clearInterval(listener);
    }

    async function startDlTest() {
      sendLog("Testing Download Speed...");
      running = true;
      startDownloadStream();
      startStreamListener();
    }

    async function stopDlTest(status="0") {
      running = false;
      stopDownloadStream();
      stopStreamListener();
      sendStatus(status);
    }
  </script>
`;

export default internetSpeedTestHtml;