'use strict';

abstract class Animal {
  name: string;
  age: number;
  gender: string;
  breedType: string;

  constructor(nameOfAnimals: string) {
    this.name = nameOfAnimals;
  }
  getName() {
    return this.name;
  }

  breed() {
    return this.breedType;
  }
}

class Reptile extends Animal {
     
  constructor(name: string) {
    super(name);
    this.breedType = 'laying eggs';
  }
}

class Mammal extends Animal {
     
  constructor(name: string) {
    super(name);
    this.breedType = 'pushing miniature versions out';
  }
}

class Bird extends Animal {
     
  constructor(name: string) {
    super(name);
    this.breedType = 'laying eggs';
  }
}

let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());