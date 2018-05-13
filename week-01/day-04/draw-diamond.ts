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

let lineCount: number = 7;

for (let i = 0; i < lineCount; i++) {
    let star = '';
        for (let j = 0; j < lineCount - i; j++) {
            star += ' ';
        }
        for (let k = 0; k <= i; k++) {    
            star += '**';
         }
        console.log(star);  
    }
    for (let l = 0; l < lineCount; l++) {
        let star2 = '';
            for (let m = 0; m < lineCount; m++) {
                star2 += '  '; 
            }
            for (let n = 0; n <= lineCount - l; n++){
                star2 += '*';
            }
            console.log(star2);
    }

