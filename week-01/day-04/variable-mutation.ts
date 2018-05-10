export {}

'use strict';

let a: number = 3;
// make it bigger by 10

console.log(a + 10);

let b: number = 100;
// make it smaller by 7

console.log(b - 7);

let c: number = 44;
// double c's value

console.log(c * 2);

let d: number = 125;
//divide d's value by 5

console.log(d / 5);

let e: number = 8;
// what's the cube of e's value?

console.log(e ** 2);

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)

if(f1 > f2) {
    console.log('fi1 is bigger than f2')
} else {
    console.log('f2 is bigger than f1')
}

let g1: number = 350;
let g2: number = 200;

// tell if the double of g2 is bigger than g1 (as a boolean)

if(g2 * 2 > g1){
    console.log('Double of g2 is bigger than g1')
} else {
    console.log('The double of g2 isn`t bigger than g1')
}

let h: number = 1357988018575474;
// tell if h has 11 as a divisor (as a boolean)

let ratio: number = h / 11;

if (h !== 0) {
    console.log('11 is divisor');
    } else {
    console.log("not divisor")};

    console.log(h / 11);

let i1: number = 10;
let i2: number = 3;
/*let i3: number = Math.sqrt i2;

tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)

if (i2 ** 2 < i1 && i1 < i3){
    console.log('It\'s true.')
}  else {
    console.log('It\'s false.')
};
*/

let j: number = 1521;
// tell if j is dividable by 3 or 5 (as a boolean)

if ((j % 3 || 5) !== 0) {
    console.log('OK! It\'s dividable')
} else {
    console.log('Not ok.')
}


let k: string = 'Apple';

// fill the k variable with its content 4 times

console.log(k + k + k + k +k);