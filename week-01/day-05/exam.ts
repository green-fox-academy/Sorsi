'use strict';

// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4


let numbers = [3, 5, 6, 72, 100];
let total: number = 0;

  for (let i: number = 0; i < numbers.length; i++) {    
    total += numbers[i];
  }

let avg: number = total / numbers.length

console.log(`Sum: ` + total)
console.log(`Average: ` + avg)
