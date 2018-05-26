export { }
'use strict';

// Write a functiOn that takes a filename as string,
// Open and read it. The file data represents a tic-tac-tOe
// game result. Return 'X'/'O'/'draw' based On which player
// has winning situatiOn.
//console.log(ticTacResult('win-o.txt'))
// shOuld print O
//console.log(ticTacResult('win-x.txt'))
// shOuld print X
//console.log(ticTacResult('draw.txt'))
// shOuld print draw

let array1: string [] = ['O', 'O', 'O'];
let array2: string [] = ['O', 'X', 'X'];
let array3: string [] = ['X', 'O', 'X'];

if (array1[0] === 'O' && array1[1] === 'O' && array1[2] === 'O'
|| array2[0] === 'O' && array2[1] === 'O' && array2[2] === 'O'
|| array3[0] === 'O' && array3[1] === 'O' && array3[2] === 'O'
|| array1[0] === 'O' && array2[0] === 'O' && array3[0] === 'O'
|| array1[1] === 'O' && array2[1] === 'O' && array3[1] === 'O'
|| array1[2] === 'O' && array2[2] === 'O' && array3[2] === 'O'
|| array1[0] === 'O' && array2[1] === 'O' && array3[2] === 'O'
|| array1[2] === 'O' && array2[1] === 'O' && array3[0] === 'O'
) { console.log('win-o.txt');
} else if (array1[0] === 'X' && array1[1] === 'X' && array1[2] === 'X'
|| array2[0] === 'X' && array2[1] === 'X' && array2[2] === 'X'
|| array3[0] === 'X' && array3[1] === 'X' && array3[2] === 'X'
|| array1[0] === 'X' && array2[0] === 'X' && array3[0] === 'X'
|| array1[1] === 'X' && array2[1] === 'X' && array3[1] === 'X'
|| array1[2] === 'X' && array2[2] === 'X' && array3[2] === 'X'
|| array1[0] === 'X' && array2[1] === 'X' && array3[2] === 'X'
|| array1[2] === 'X' && array2[1] === 'X' && array3[0] === 'X'
) { console.log('win-x.txt');
} else {
  console.log('draw.txt')
}


