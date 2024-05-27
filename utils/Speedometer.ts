export default class Speedometer {
  static min = 0;
  static max = 100;

  static minDegrees = 0;
  static maxDegrees = 180;

  static m = (this.maxDegrees - this.minDegrees) / (this.max - this.min);
  static n = this.minDegrees - (this.m * this.min);

  static limitValue(value) {
    if (value < this.min) {
      return this.min;
    }

    if (value > this.max) {
      return this.max;
    }

    return value;
  }

  static getDegrees(value) {
    const limitedValue = this.limitValue(value);

    const degrees = this.m * limitedValue + this.n;

    return degrees;
  }
}