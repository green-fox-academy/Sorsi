export{};

/'use strict'

let a: number = 123;
let b: number = 526;

function swap(a, b) {
    return [b, a]
}

console.log ([a, b] = swap(a, b));