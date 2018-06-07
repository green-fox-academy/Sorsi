'use strict';

// Create a function that
// - takes a filename as a parameter,
// - reads a csv file which rows contains data in the following format: <person name>;<birthdate in YYYY-MM-DD format>;<city name>
// - returns the year when the most births happend.
// You can find such a csv file in this directory: births.csv
// If you pass births.csv to your function, the result should be 2006.

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

function readFromFile(filename: string) {
  try {
    return fs.readFileSync(filename, charEncoding);
  } catch (error) {
    return null;
  }
}

function getYear(filename: string) {
  let content: string = readFromFile('births.csv');
  for (let i: number = 0; i < content.length; i++) {
    for (let j: number = 0; j < content[i].length) {
      
    }
  }
}



console.log(typeof content)
