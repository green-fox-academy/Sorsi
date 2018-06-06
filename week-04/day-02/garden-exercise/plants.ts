'use strict';

class Plants {
  specification: string;
  thresHold: number;
  currentWaterLevel: number;

  constructor(color: string) {
    this.specification = color;
    this.thresHold = 0;
    this.currentWaterLevel = 0;
  }

  watering(waterAmount: number) {
    if (this.currentWaterLevel < this.thresHold) {
      this.currentWaterLevel += waterAmount;
    }
  }
}

export { Plants };