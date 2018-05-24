'use strict'

// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function bunny2(n: number): number {
  let bunnies: number = 2;
  if (n > 0) {
    if (n % 2 === 0) {
    bunnies = 3;
  }
    return bunnies + bunny2(n - 1);    
  } else {
    return n;
  }
}

console.log(bunny2(5));