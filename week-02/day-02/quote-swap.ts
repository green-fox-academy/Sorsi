'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code
// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

//What I cannot create, I do not understand

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

function quoteSwap(list: string[]) {
  list.splice(2, 1, 'cannot');
  list.splice(5, 1, 'do');
  return ` ${list[0]} ${list[1]} ${list[2]} ${list[3]} ${list[4]} ${list[5]} ${list[6]} ${list[7]}`;
}

console.log(quoteSwap(words));
// Expected output: "What I cannot create I do not understand."
export = quoteSwap;

