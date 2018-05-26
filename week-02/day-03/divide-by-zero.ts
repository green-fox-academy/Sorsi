export {}
'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

let myNumber: number = 0;

function division(a: number): any {
  let num = myNumber / 10;
    if (myNumber === 0) {
        return 'Fail!';
    } else {
        return num;
    }   
}

console.log(division(myNumber))