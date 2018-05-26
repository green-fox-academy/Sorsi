export {}
'use strict';

// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

declare function require(path: string): any;
let fs = require('fs');

function writeToFile(filePath: string, content: string) {
    try {
       fs.writeFileSync('my-file.txt', 'Orsi');
    } catch(error) {
        console.log('Unable to write file: my-file.txt');
    }
}

writeToFile('my-file.txt', 'Orsi');