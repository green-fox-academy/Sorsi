export {}
'use strict';

// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

function readFromFile(filePath: string) {
    try {
        return fs.readFileSync('my-file.txt', charEncoding);
    } catch(error) {
        console.log(('it does not exists'));
        return null;
        //result: string = readFromFile('my-file.txt');
    }
}

let result = readFromFile('my-file.txt');
if (result !== null) {
    result.split('\r\n').forEach(line => {
        console.log(line.split('').length);
    });
}
