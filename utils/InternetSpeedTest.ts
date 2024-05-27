const { FastAPI, SpeedUnits } = require('fast-api-speedtest');

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

  async testDownloadSpeed(): Promise<Array<Number>> {
    // const downloadSize = 10 * 1024 * 1024; // 10MB
    // const downloadUrl = "https://examplefile.com/file-download/24";
    
    // const downloadStart = new Date().getTime();
    // const downloadResponse = await fetch(downloadUrl, {
      //   cache: "no-store",
    // });
    // const downloadEnd = new Date().getTime();
    
    // const downloadTime = (downloadEnd - downloadStart) / 1000;
    // console.warn(downloadResponse.status, downloadTime);
    // const downloadSpeedMbps = Number(((downloadSize / downloadTime) / 1024 / 1024).toFixed(2));
    
    const FastTest = new FastAPI({
      measureDownload: true,
      downloadUnit: SpeedUnits.Mbps,
      timeout: 60000
    });

    const { downloadSpeed } = await FastTest.runTest();

    this.downloadSpeeds.push(downloadSpeed);

    return [downloadSpeed, this.getAverageDownloadSpeedMbps()];
  }
}