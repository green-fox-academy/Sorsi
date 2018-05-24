'use strict'
export {}

// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function SumDigits(n: number) {
  console.log(n)
  if (n > 9) {
      return n % 10 + SumDigits(Math.floor(n / 10));
  } else {
    return n;
  }
}

console.log(SumDigits(56479));