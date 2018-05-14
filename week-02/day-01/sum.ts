export{}

'use strict';

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

let input: number = 2;


const sum = function(input: number): number {
    let total: number = 0;
    for (let i: number = 1; i <= input; i++) {
        total += i;
    }
    return total;
}

console.log(sum(input));