export { }
'use strict';

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

function copyFiles(startFile: string, outFile: string): any {
  try {
    fs.writeFileSync(outFile, fs.readFileSync(startFile, charEncoding));
    console.log(true)
  }
  catch {
    console.log(false)
  }
}

copyFiles('file01.txt', 'file02.txt')