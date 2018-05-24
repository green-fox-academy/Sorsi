'use strict'
export {}

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunny1(n: number): number {
  let bunnies: number = 2;  
  if (n > 0) {
    return bunnies + bunny1(n - 1);    
  } else {
    return n;
  }
}

console.log(bunny1(6));