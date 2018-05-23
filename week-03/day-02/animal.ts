'use strict'

/*
Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one
*/

class Animal {  
  hunger: number;
  thirst: number;

  constructor() {
    this.hunger = 50;
    this.thirst = 50;
  }

  public eat(hunger: number) {
    this.hunger--;
    return this;
  }

  public drink() {
    this.thirst--;
    return this;

  }

  public play() {
    this.hunger++;
    this.thirst++;
    return this;
  }
}

let dog = new Animal();

console.log(dog.play());