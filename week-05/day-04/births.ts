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

function getYear() {

  let content: string = readFromFile('births.csv');
  let txtArray: string[] = content.split('\r\n');

  let newArray: string[][] = [];
  for (let i: number = 0; i < txtArray.length; i++) {
    txtArray[i].split(';');
    newArray.push(txtArray[i].split(';'));
  }

  let birthdays: string[] = [];
  for (let i: number = 0; i < newArray.length; i++) {
    birthdays.push(newArray[i][1]);
  }

  let birthYears: string[][] = [];
  let finalList: string[] = [];
  for (let i: number = 0; i < birthdays.length; i++) {
    birthdays[i].split('-');
    birthYears.push(birthdays[i].split('-'));
    finalList.push(birthYears[i][0]);
  }
  finalList.sort()
  return finalList;
}

let result = (getYear());

//console.log(typeof result)

function yearCount(rd: string[]): Object {
  let counter: Object = {};
  if (rd.length == 0) {
    return null;
  }
  let maxE1 = rd[0];
  let maxCount: number = 1;

  for (let i: number = 0; i < rd.length; i++) {
    let nmbr = rd[i];
    if (counter[nmbr] == null) {
      counter[nmbr] = 1;
    } else {
      counter[nmbr]++;
    }
    if (counter[nmbr] > maxCount) {
      maxE1 = nmbr;
      maxCount = counter[nmbr];
    }
  }
  return maxE1
}

console.log(yearCount(result));
