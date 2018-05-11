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
let star: string = '*';
let i;


for (i = 0; i < lineCount; i++){
    console.log (star)
    star += '*';
}