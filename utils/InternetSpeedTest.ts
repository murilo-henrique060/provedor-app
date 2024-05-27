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
    const downloadSize = 25 * 1024 * 1024; // 25MB
    // const downloadUrl = "https://examplefile.com/file-download/24";
    const downloadUrl = "https://teste.ibltelecom.com:8080/download?nocache=b50bdb2a-c960-4f44-93a7-844465cbd04d&size=25000000&guid=80ab1a33-42c9-45c1-89fb-705b6d1baf38";
    
    try {  
      const downloadStart = new Date().getTime();
      const downloadResponse = await fetch(downloadUrl, {
        mode: "cors",
        keepalive: true,
        priority: "high",
        referrerPolicy: "no-referrer",
        cache: "no-store",
      });
      const downloadEnd = new Date().getTime();
      
      const downloadTime = (downloadEnd - downloadStart) / 1000;
      console.warn(downloadResponse.status, downloadTime);
      const downloadSpeedMbps = Number(((downloadSize / downloadTime) / 1024 / 1024).toFixed(2));

      this.downloadSpeeds.push(downloadSpeedMbps);

      return [downloadSpeedMbps, this.getAverageDownloadSpeedMbps()];
    } catch (error) {
      console.error(error);
      return [0, 0];
    }
  }
}