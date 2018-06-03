'use strict';

// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"
let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
let elements: number[] = [4, 8, 12, 16];

function checkNums(listOfNumbers: number[]): any {  
  if (listOfNumbers.indexOf(4) && listOfNumbers.indexOf(8) && listOfNumbers.indexOf(12) && listOfNumbers.indexOf(16) !== -1) {
    return true;
  } else {
    return false;
  }
}

console.log(checkNums(listOfNumbers));

export = checkNums;