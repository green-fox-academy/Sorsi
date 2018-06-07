'use strict';

import { Plant } from "./plants";

export class Tree extends Plant {
  
  constructor(color: string) {
    super();
    this.name = 'Tree';
    this.color = color;
    this.currentWaterAmount = 0;
    this.waterNeed = 10;
    this.absorbingAbility = 0.4;
  }
}