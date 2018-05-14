export {}

'use strict';

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let lineCount2: number = 7;

for (let i = 0; i < lineCount2; i++) {
    let star = '';
        for (let j = 0; j < lineCount2 - i; j++) {
            star += ' ';
        }
        for (let k = 0; k <= i; k++) {    
            star += '**';
         }
         console.log(star);
    }

let lineCount: number = 7;

for (let m = 0; m < lineCount; m++) {
    let star2 = '';
        for (let n = 0; n <= lineCount; n++) {
            star2 += ' ';
        for (let l = 0; l < m; l++) {
            star2 += '**'
            }
        console.log(star2);
        }
}

