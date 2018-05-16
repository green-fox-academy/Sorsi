export {}
'use strict';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

function readFromFile(filePath: string) {
    try {
        return fs.readFileSync(filePath, charEncoding);
    } catch(error) { 
        return null;
         }
}

let result = readFromFile('my-text.txt');

if (result !== null) {
    result.split('\r\n').forEach(line => {
        console.log(line.split('').length);
    });} else {
        console.log ('0')
    }
