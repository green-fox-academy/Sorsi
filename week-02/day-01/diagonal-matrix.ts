'use strict'
export {}

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let size: number = 4;
let matrix: string = 'p'
let neo: string = 'I'

for (let i = 0; i < size; i++) {
  console.log(matrix);
  for (let j: number = 0; j = i; j++) {
    console.log(neo + matrix);
  }  
}
