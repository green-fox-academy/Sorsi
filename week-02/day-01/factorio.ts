export{}

'use strict';

// -  Create a function called `factorio`
//    that returns it's input's factorial

let input: number = 3;

function factorio(input: number): number {
    let total: number = 1;
    for (let i: number = 1; i <= input; i++) {
        total *= i;
    }
    return total;
}

console.log(factorio(input))
