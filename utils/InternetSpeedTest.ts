const internetSpeedTestHtml = /* html */ `
  <html>
    <head>
      <script>
        function log(message) {
          document.getElementById("log").innerHTML += "<br>" + message;
        }
      </script>

      <script type="text/speedtest-worker">
        const downloadSizeMB = 1;
        const downloadSize = downloadSizeMB * 1024 * 1024; // 1MB
        const downloadUrl = "https://nyc.speedtest.clouvider.net/backend/garbage.php";
        const paralellDownloads = 1;

        let runningTest = false;

        function downloadFile() {
          return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            
            request.onload = () => {
              resolve("Downloaded File");
            }

            request.onprogress = (event) => {
              if (event.lengthComputable) {
                const percentComplete = event.loaded / event.total * 100;
                postMessage(percentComplete);
              }
            }

            request.onerror = (error) => {
              reject("Error during download");
            }

            request.open("GET", downloadUrl + \`?cors=true&r=\$\{Math.random()\}ckSize=\$\{downloadSizeMB\}\`);
            request.send();
          });
        }

        async function dlTest() {
          const message = await downloadFile();
        }

        async function onmessage (event) => {
          postMessage("Worker Received Message: " + event.data);
          switch (event.data) {
            case "dlTest":
              runningTest = true;
              await dlTest();
              break;
          }
        }
      </script>

      <script>
        function createWorker() {
          const blob = new Blob(
            Array.prototype.map.call(
              document.querySelectorAll("script[type='text\/speedtest-worker']"),
              (script) => script.textContent
            ),
            { type: "text/javascript" },
          );

          const worker = new Worker(URL.createObjectURL(blob));

          return worker;
        }
      </script>

      <script>
        const speedStream = [];

        function start() {
          const worker = createWorker();
          log("Worker Created");
          worker.postMessage("dlTest");
        }

        window.onload = start;
      </script>
    </head>
    <body>
      <p>log: <span id=log></span></p>
    </body>
  </html>
`;

export default internetSpeedTestHtml;

// export default class InternetSpeedTest {
//   downloadSpeeds: number[] = [];

//   reset(): void {
//     this.downloadSpeeds = [];
//   }

//   getAverageDownloadSpeedMbps(): number {
//     const totalSpeed = this.downloadSpeeds.reduce((acc, speed) => acc + speed, 0);
//     const averageSpeed = totalSpeed / this.downloadSpeeds.length;

//     return Number(averageSpeed.toFixed(2));
//   }

//   async testDownloadSpeed(): Promise<number> {
//     const downloadSize = 8_185_374; // 8.2MB
//     const downloadUrl = "https://reactnative.dev/img/header_logo.svg";
//     // const downloadSize = 1_048_576; // 1 MB
//     // const downloadUrl = `https://nyc.speedtest.clouvider.net/backend/garbage.php?cors=true&r=${Math.random()}&ckSize=1`;
    
//     try {
//       console.log("Testing Download Speed...");
      
//       const a = [new Date().getTime()];

//       const request = new XMLHttpRequest();
//       request.onprogress = (event) => {
//         console.log(event);
//         console.log("Progress: ", event.loaded);
//       }

//       request.onload = () => {
//         console.log("finished")
//       }
//       request.open("GET", downloadUrl);
//       await request.send();

//       console.log("Finished Download Speed Test");

//       // const downloadStart = new Date().getTime();

//       // await fetch(downloadUrl, { cache: "no-store", mode: "cors"});
//       // const downloadEnd = new Date().getTime();

//       // const downloadTime = (downloadEnd - downloadStart) / 1000;
//       // const downloadSpeedBps = downloadSize / downloadTime;
//       // const downloadSpeedMbps = Number(((downloadSpeedBps / 1024 / 1024) * 8).toFixed(2));
      
//       // console.log("Download Time: ", (downloadEnd - downloadStart) / 1000 + "\n");
//       // console.log("Download Speed: ", downloadSpeedMbps + " Mbps\n");
//       // console.log(" ")
      
//       //this.downloadSpeeds.push(downloadSpeedMbps);

//       return 0; //downloadSpeedMbps;
//     } catch (error) {
//       console.error(error);
//       throw "Internet Speed Test Error";
//     }
//   }
// }
/*
function test() {
          let totLoaded = 0.0;
          let startTime = new Date().getTime();

          const log = document.getElementById("log");
          log.innerHTML = "Testing...";

          const request = new XMLHttpRequest();
          request.onload = () => {
            log.innerHTML = "Finished";
          }
          request.onprogress = (event) => {
            log.innerHTML = "Progress: " + event.loaded/event.total * 100 + "%";
            log.innerHTML += "<br>Length Computable: " + event.lengthComputable;
            log.innerHTML += "<br>Loaded: " + event.loaded;
            log.innerHTML += "<br>Total: " + event.total;
          }
          request.onerror = (error) => {
            log.innerHTML = "Error: " + error;
          }
          request.open("GET", "https://upload.wikimedia.org/wikipedia/commons/0/07/Wikipedia20_animated_cake_1MB.gif");
          request.send();
        }
        */