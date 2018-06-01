export{}

'use strict';

// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

let ai: number [] = [3, 4, 5, 6, 7];

function sumElements(a: number[]) {
    let total: number = 0;
    for (let i: number = 0; i < ai.length; i++){
        total += ai[i];
    }
    return total;
}

console.log(sumElements(ai));