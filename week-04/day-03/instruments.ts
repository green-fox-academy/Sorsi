'use strict'

abstract class Instrument {
  protected name: string;

  constructor(nameOfInstruments: string) {
    this.name = nameOfInstruments;
  }

  abstract play();
}

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;  

  constructor(name: string, numberOfStrings: number) {
    super(name);
    this.numberOfStrings = numberOfStrings;
  }
  abstract sound();
  play() {
    console.log(`${this.name} , a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`)
  }
}

class ElectricGuitar extends StringedInstrument {
  constructor(numberOfStrings?: number) {

    super('ElectricGuitar', numberOfStrings === undefined ? 6 : numberOfStrings)
  }
  sound() {
    return 'Twang'
  }
}

class BassGuitar extends StringedInstrument {
  constructor(numberOfStrings?: number) {
    super('BassGuitar', numberOfStrings === undefined ? 4 : numberOfStrings)    
  }
  sound() {
    return 'Duum-duum-duum'
  }
}

class Violin extends StringedInstrument{
  constructor(numberOfStrings?: number) {
    super('Violin', numberOfStrings === undefined ? 4 : numberOfStrings)
  }
  sound() {
    return 'Screech'
  }
}

console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.');
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings .');
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();