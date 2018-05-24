'strict'
export {}

// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

/*function changeLetters(word: string) {
  if (word.indexOf('x') === -1) {
    return word;
  } else {
    word = word.replace('x', '');
    return changeLetters(word);
  }
}

console.log(changeLetters('extended'));