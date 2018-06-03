export { }
'use strict';

// Write a function that takes a filename as string,
// Open and read it. The file data represents a tic-tac-tOe
// game result. Return 'X'/'O'/'draw' based On which player
// has winning situatiOn.
//console.log(ticTacResult('win-o.txt'))
// shOuld print O
//console.log(ticTacResult('win-x.txt'))
// shOuld print X
//console.log(ticTacResult('draw.txt'))
// shOuld print draw

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

function whoIsTheWinner(filename: string) {
  try {
    let fileContent: string = fs.readFileSync(filename, charEncoding);
    console.log('Valid file');

    if (
      (fileContent[0] && fileContent[1] && fileContent[2] === 'O')
      || (fileContent[3] && fileContent[4] && fileContent[5] === 'O')
      || (fileContent[6] && fileContent[7] && fileContent[8] === 'O')
      || (fileContent[0] && fileContent[4] && fileContent[7] === 'O')
      || (fileContent[1] && fileContent[4] && fileContent[7] === 'O')
      || (fileContent[2] && fileContent[5] && fileContent[8] === 'O')
      || (fileContent[1] && fileContent[4] && fileContent[8] === 'O')
      || (fileContent[2] && fileContent[4] && fileContent[6] === 'O')
    ) {
      return 'O';
    } else if (
      (fileContent[0] && fileContent[1] && fileContent[2] === 'X')
      || (fileContent[3] === 'X' && fileContent[4] === 'X' && fileContent[5] === 'X')
      || (fileContent[6] === 'X' && fileContent[7] === 'X' && fileContent[8] === 'X')
      || (fileContent[0] === 'X' && fileContent[4] === 'X' && fileContent[7] === 'X')
      || (fileContent[1] === 'X' && fileContent[4] === 'X' && fileContent[7] === 'X')
      || (fileContent[2] === 'X' && fileContent[5] === 'X' && fileContent[8] === 'X')
      || (fileContent[1] === 'X' && fileContent[4] === 'X' && fileContent[8] === 'X')
      || (fileContent[2] === 'X' && fileContent[4] === 'X' && fileContent[6] === 'X')
    ) {
      return 'X';
    } else {
      return 'DRAW';
    }
  }
 catch (error) {
  console.log('Invalid file');
}
}

console.log(whoIsTheWinner('win-o.txt.txt'));
console.log(whoIsTheWinner('win-x.txt.txt'));
console.log(whoIsTheWinner('draw.txt.txt'));
