export {}

'use strict';

let a: number = 24;
let out: number = 0;

// if a is even increment out by one

if(a % 2 === 0) {out++;
   console.log(out)
}

console.log(out);

let b: number = 444;
let out2: string = '';

// if b is between 10 and 20 set out2 to "Sweet!"
// if less than 10 set out2 to "Less!",
// if more than 20 set out2 to "More!"

if (b > 10 && b < 20) {
    out2 = 'Sweet';
    console.log(out2)
} else if (b < 10) {
    out2 = 'Less!';
    console.log(out2)
} else {
    out2 = 'More!';
    console.log(out2)
}


let c: number = 123;
let credits: number = 100;
let isBonus: boolean = true;

// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same

if (credits >= 50 && isBonus) {
    console.log(c - 2);
} else if (credits < 50 && isBonus) {
    console.log(c++);
} else {
    console.log(c);
}

let d: number =  9;
let time: number = 220;
let out3: string = '';

// if d is dividable by 4
// and time is not more than 200
// set out3 to "check"
// if time is more than 200
// set out3 to "Time out"
// otherwise set out3 to "Run Forest Run!"

if (d % 4 && time !== 200) {
    out3 = 'chheck';
} else if (time > 200) {
    out3 = 'Time out!';
} else {
    out3 = 'Run Forest, run!';
} 
console.log(out3);
