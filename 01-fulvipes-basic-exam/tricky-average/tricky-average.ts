/** 
 * Create and test a function called `getTrickyAvg` that takes a number array as parameter
 * and returns the average of the smallest odd and largest even.
 *  - use only basic control flow statements, like 'for', 'if', etc.
 *  - do not use built-in methods like 'filter', 'forEach', 'map', etc.
 *  - write test for 2 different scenarios (test file: tricky-average.spec.ts)
 * 
 * Example cases:
 *   [1, 2, 3] -> should return 1.5
 *   [3, 4, 5, 6] -> should return 4.5
 *   [5, 2, 8, -1] -> should return 3.5
 */
'use strict';

let example1: number[] = [1, 2, 3];
let numberArrayB: number[] = [3, 4, 5, 6];
let example3: number[] = [5, 3, 7, -1];
let evenNumbers: number[] = [];
let oddNumbers: number[] = [];
let mxOdds: number;
let mnEven: number;
let result: number;
let maximum: number = 0;
let minimum: number = 0;

function sortArray(numberArray: number[]): number[] {

  for (let i: number = 0; i < numberArray.length - 1; i++) {
    for (let j: number = i + 1; j < numberArray.length; j++) {
      if (numberArray[i] > numberArray[j]) {
        let temp: number = numberArray[i];
        numberArray[i] = numberArray[j];
        numberArray[j] = temp;
        console.log(numberArray)
      }
    }
  }
  return numberArray;
}

console.log(sortArray(example3));

function getTrickyAvg(numberArray: number[]): any {

  for (let i: number = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
      evenNumbers.push(numberArray[i]);
    } else if (numberArray[i] % 2 === 1) {
      oddNumbers.push(numberArray[i]);
    }
  }
  mnEven = Math.min(...evenNumbers);
  mxOdds = Math.max(...oddNumbers);
  result = (mnEven + mxOdds) / 2;

  return result;
}


function getTrickyAvgBversion(numberArrayB: number[]): any {
  let evenArray: number[] = [];
  let oddArray: number[] = [];

  for (let i: number = 0; i < numberArrayB.length; i++) {
    if (numberArrayB[i] % 2 === 0) {
      evenArray.push(numberArrayB[i]);
    } else {
      oddArray.push(numberArrayB[i]);
    }
  }
  if (evenArray.length > 0 && oddArray.length > 0) {
    let maxEven: number = evenArray[0];
    for (let i: number = 1; i < evenArray.length; i++) {
      if (maxEven < evenArray[i]) {
        maxEven = evenArray[i];
      }
    }
    let minOdd: number = oddArray[0];
    for (let i: number = 1; i < oddArray.length; i++) {
      if (minOdd > oddArray[i]) {
        minOdd = oddArray[i];
      }
    }
    return (maxEven + minOdd) / 2;
  } else {
    return 0;
  }
}

/* function getTrickyAvgCversion(arr: number[]) {
  for (let i: number = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(arr[i]);
    } else if (i % 2 === 1) {
      oddNumbers.push(arr[i]);
    }
  }
  for ()
}.................. */
// I'm sad and angry a bit :( too much time wasted 

console.log(getTrickyAvgBversion(example3));
//console.log(Math.min(...temp))
//console.log(-1 % 2)
//console.log(getTrickyAvg(example3));

/********************************
 * Do not modify the code below *
 ********************************/
export default getTrickyAvg;
