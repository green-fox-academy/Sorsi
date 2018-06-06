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
       console.log(`The ${this.listOfPlans[i]} needs water.`);
     }
    }
  }
}

let flower1 = new Flowers('yellow');
let flower2 = new Flowers('blue');
let tree1 = new Trees('purple');
let tree2 = new Trees('orange');

let garden = new Garden('green')

console.log(garden.show())
