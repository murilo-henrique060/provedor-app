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
    const downloadUrl = "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tokyo_Sky_Tree_2012.JPG";
    
    try {  
      const downloadStart = new Date().getTime();
      await fetch(downloadUrl, { cache: "no-store" });
      const downloadEnd = new Date().getTime();

      const downloadTime = (downloadEnd - downloadStart) / 1000;
      const downloadSpeedBps = downloadSize / downloadTime;
      const downloadSpeedMbps = Number(((downloadSpeedBps / 1024 / 1024) * 8).toFixed(2));

      this.downloadSpeeds.push(downloadSpeedMbps);

      return downloadSpeedMbps;

    } catch (error) {
      console.error(error);
      throw "Internet Speed Test Error";
    }
  }
}