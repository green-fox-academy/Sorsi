'use strict';

class Station {
  gasAmount: number;

  constructor(gas: number) {
    this.gasAmount = gas;
  }

  refill(car: Car) {
    this.gasAmount -= car.capayity;
    car.gasAmount = 240;
  }
}

class Car {
  gasAmount: number;
  capayity: number;

  constructor(gasAmount: number, capayity: number) {
    this.gasAmount = gasAmount;
    this.capayity = capayity;
  }
}

let car = new Car(0, 100);
let station = new Station(240)

console.log(station.refill(car));
console.log(car.gasAmount);

console.log(station.gasAmount);