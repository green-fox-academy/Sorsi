'use strict';

export function anagram(wordA:string, wordB: string): boolean {
  let wordAarray = wordA.toLowerCase().split('').sort().join('').trim();
  let wordBarray = wordB.toLowerCase().split('').sort().join('').trim();
  
  if (typeof wordA !== 'string' || wordB !== 'string') {
    return false;
  }

  if (wordAarray === wordBarray) {
    return true;
  } 
  else {
    return false;
  }
}

console.log(anagram('palacsinta', 'csipala'));