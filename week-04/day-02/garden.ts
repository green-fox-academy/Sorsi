'use strict';

import { Flowers } from './flowers';
import { Trees } from './trees';

class Garden {
  specification: string;
  thirstLevel: number;
  listOfPlans: any[];

  constructor(color: string) {
    this.specification = color;
    this.thirstLevel = 0;
  }

  makeAList(color) {
    this.listOfPlans.push(new Flowers(color));
  }
  makeAList2(color) {
    this.listOfPlans.push(new Trees(color));
  }

  public watering(): void {
    for (let i: number = 0; i < this.listOfPlans.length; i++) {
      this.listOfPlans[i].watering();
    }  
  }

  public show() {
    for (let i: number = 0; i < this.listOfPlans.length; i++) {
     if (this.listOfPlans[i].currentWaterLevel < this.listOfPlans[i].thresHold) {
       console.log(`The ${} needs water.`);
     }
    }
  }
}