export {}
'use strict';

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineCount: number = 4;

for (let i = 0; i < lineCount; i++) {
let star = "";
    for (let j = 0; j < lineCount-i; j++) {
        star += " ";
    }
    for (let k = 0; k <= i; k++) {    
        star += "**" ;
     }
    console.log(star);  
}

