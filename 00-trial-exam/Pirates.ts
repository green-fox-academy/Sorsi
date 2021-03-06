'use strict';

class Pirate {
  name: string;
  hasWoodenLeg: boolean;
  gold: number;

  constructor(name: string, hasWoodenLeg: boolean, gold: number) {
    this.name = name;
    this.hasWoodenLeg = hasWoodenLeg;
    this.gold = gold;
  }
}

// Given this list...
function initializePirates(): Pirate[] {
  let pirates = [];
  pirates.push(new Pirate("Olaf", false, 12));
  pirates.push(new Pirate("Uwe", true, 9));
  pirates.push(new Pirate("Jack", true, 16));
  pirates.push(new Pirate("Morgan", false, 17));
  pirates.push(new Pirate("Hook", true, 20));
  return pirates;
}

//console.log(initializePirates());

//let pirates = initializePirates();

// Write a function that takes any list that contains pirates as in the example,
// And returns a list of names containing the pirates that
// - have wooden leg and
// - have more than 15 gold

function checkPiratesStatus(pirateslist: Pirate[]): string[] {
  let temp: string[] = [];
  for (let i: number = 0; i < pirateslist.length; i++) {
    if (pirateslist[i].hasWoodenLeg && pirateslist[i].gold > 15) {
      temp.push(pirateslist[i].name);
    }
  }
  return temp;
}

console.log(checkPiratesStatus(initializePirates()));