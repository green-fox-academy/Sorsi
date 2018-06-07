'use strict';

import { Plant } from "./plants";

export class Flower extends Plant {

  constructor(color: string) {
    super();
    this.name = 'Flower';
    this.color = color;
    this.currentWaterAmount = 0;
    this.waterNeed = 5;
    this.absorbingAbility = 0.75;
  }
}