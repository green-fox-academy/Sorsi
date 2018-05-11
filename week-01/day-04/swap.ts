export{};

'use strict';

let a: number = 123;
let b: number = 526;
let c: number = a;

a = b;
b = c;

console.log(b);
console.log(a);
