export{}

'use strict';

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

let j


for (j = 0; j < 100; j++) {
    console.log(j); {
        if (j % 3) {
            console.log('Fizz')}
        else if (j % 5) {
            console.log('Buzz')}
        else if (j % 3 && 5) {
            console.log('FizzBuzz')
        }
        else console.log(j)    }
  }