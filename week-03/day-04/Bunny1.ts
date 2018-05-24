'use strict'

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunny(n: number): number {
  let bunnies: number = 2;
  if (n > 0) {
    return bunnies + bunny(n - 1);
  } else {
    return n;
  }
}

console.log(bunny(6));