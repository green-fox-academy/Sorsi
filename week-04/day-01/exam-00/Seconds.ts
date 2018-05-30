// Create a function that takes a list as a parameter,
// and returns a new list with every second element from the orignal list
// example: [1, 2, 3, 4, 5] should produce [2, 4] - print this result

let listArray: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/*
function isEven(element, index, array) {
  return (element % 2 === 0)
}

let newArray = listArray.filter(isEven);

console.log(newArray);


function printEven(arr: number []) {
  let newArray: number [] = [];
    for (let i: number = 1; i < listArray.length; i += 2) {    
      newArray.push(listArray[i]);    
    }
    return newArray;
}

console.log(printEven(listArray));
*/

function printEven(arr: number []) {
  let newArray: number [] = [];
  for (let i: number = 0; i < listArray.length; i++) {
    if (i % 2 !== 0) {
      newArray.push(listArray[i]);
    }          
  }
  return newArray;
}

console.log(printEven(listArray));