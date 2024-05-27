export default class Chart {
  static origin = [20, 130];
  static endX = [285, 130];
  static endY = [20, 15];

  static deltaX = this.endX[0] - this.origin[0];
  static deltaY = this.origin[1] - this.endY[1];

  static minSpeed = 0;
  static maxSpeed = 100;

  static offsetY = 15;

  static min = 0;
  static max = 115;

  static m = (this.maxSpeed - this.minSpeed) / (this.max - this.min);
  static n = this.minSpeed - (this.m * this.min);

  static getStep(speedsLength: number): number {
    if (speedsLength === 0) {
      return 0;
    }
    
    return this.deltaX / speedsLength;
  }

  static limitSpeed(speed: number): number {
    if (speed < this.minSpeed) {
      return this.minSpeed;
    }

    if (speed > this.maxSpeed) {
      return this.maxSpeed;
    }

    return speed;
  }

  static getSpeedY(speed: number): number {
    const limitedSpeed = this.limitSpeed(speed);

    const y = this.offsetY + (this.max - (this.m * limitedSpeed + this.n));

    return y;
  }
}