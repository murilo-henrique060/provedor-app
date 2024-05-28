export default class InternetSpeedTest {
  downloadSpeeds: number[] = [];

  reset(): void {
    this.downloadSpeeds = [];
  }

  getAverageDownloadSpeedMbps(): number {
    const totalSpeed = this.downloadSpeeds.reduce((acc, speed) => acc + speed, 0);
    const averageSpeed = totalSpeed / this.downloadSpeeds.length;

    return Number(averageSpeed.toFixed(2));
  }

  async testDownloadSpeed(): Promise<number> {
    const downloadSize = 8_185_374; // 8.2MB
    const downloadUrl = "https://reactnative.dev/img/header_logo.svg";
    // const downloadSize = 1_048_576; // 1 MB
    // const downloadUrl = `https://nyc.speedtest.clouvider.net/backend/garbage.php?cors=true&r=${Math.random()}&ckSize=1`;
    
    try {
      console.log("Testing Download Speed...");
      
      const a = [new Date().getTime()];

      const request = new XMLHttpRequest();
      request.onprogress = (event) => {
        console.log(event);
        console.log("Progress: ", event.loaded);
      }

      request.onload = () => {
        console.log("finished")
      }
      request.open("GET", downloadUrl);
      await request.send();

      console.log("Finished Download Speed Test");

      // const downloadStart = new Date().getTime();

      // await fetch(downloadUrl, { cache: "no-store", mode: "cors"});
      // const downloadEnd = new Date().getTime();

      // const downloadTime = (downloadEnd - downloadStart) / 1000;
      // const downloadSpeedBps = downloadSize / downloadTime;
      // const downloadSpeedMbps = Number(((downloadSpeedBps / 1024 / 1024) * 8).toFixed(2));
      
      // console.log("Download Time: ", (downloadEnd - downloadStart) / 1000 + "\n");
      // console.log("Download Speed: ", downloadSpeedMbps + " Mbps\n");
      // console.log(" ")
      
      //this.downloadSpeeds.push(downloadSpeedMbps);

      return 0; //downloadSpeedMbps;
    } catch (error) {
      console.error(error);
      throw "Internet Speed Test Error";
    }
  }
}