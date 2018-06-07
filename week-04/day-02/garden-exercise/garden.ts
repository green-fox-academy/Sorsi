import { Plant } from "./plants";
import { Tree } from "./trees";
import { Flower } from "./flowers";

'use strict';

class Garden {
  plants: Plant[];
  waterAmount1: number;
  waterAmount2: number;

  constructor() {
    this.plants = [];
  }

  collectingPlants(plants: Plant) {
    this.plants.push(plants);
    return this.plants.length;
  }

  watering(waterAmount: number) {
    for (let i: number = 0; i < this.plants.length; i++) {
      if (this.plants[i].currentWaterAmount < this.plants[i].waterNeed) {
        this.plants[i].currentWaterAmount += waterAmount / this.plants.length * this.plants[i].absorbingAbility;
      }
    }
    return this.plants;
  }
}

let garden = new Garden();
let flower1 = new Flower('yellow');
let flower2 = new Flower('blue');
let tree1 = new Flower('purple');
let tree2 = new Flower('orange');

console.log(garden.watering(40))
console.log(garden.plants)