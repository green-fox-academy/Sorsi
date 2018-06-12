'use strict';

//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `True` sort that list descending
//  Example:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
//console.log(advancedBubble([34, 12, 24, 9, 5]));
//  should print [34, 24, 12, 9, 5]

function bubble(arr: number[]): number[] {
  for (let i: number = 0; i < arr.length; i++) {
    for (let j: number = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp: number = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        console.log(arr)
      }
    }
  }
  return arr;
}