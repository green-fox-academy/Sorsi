'use strict';
export {};

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once
function unique(arr: number[]): number [] {
  let temp: number [] = [];

  for (let i: number = 0; i < arr.length; i++) {
   if (temp.indexOf(arr[i]) === -1){
     temp.push(arr[i]);
   }
  }
  return temp;
}


//  Example
//console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`

let arr = [1, 11, 34, 11, 52, 61, 1, 34];

console.log(unique(arr));
