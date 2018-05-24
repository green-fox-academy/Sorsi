'use strict'
export {}

// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function changeLetters(word: string) {
  if (word.indexOf('x') === -1) {
    return word;
  } else {
    word = word.replace('x', 'y');
    return changeLetters(word);
  }
}

/*let word: string = 'extendxxed';
let newword: string = word.replace('x', 'y');
*/

console.log(changeLetters('extendesx'));
