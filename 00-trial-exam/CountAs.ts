// Create a function that takes a filename as string parameter,
// counts the occurances of the letter "a", and returns it as a number.
// If the file does not exist, the function should return 0 and not break.

// example: on the input "afile.txt" the function should return 28 - print this result
// example: on the input "not-a-file" the function should return 0 - print this result

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

function readFromFile(filePath: string) {
  try {
    return fs.readFileSync(filePath, charEncoding);
  } catch(error) {
    return 0;
  }
}

function countingAs(fileName: string) {
  let content: string = readFromFile(fileName);
  let counter: number = 0;
  if (content !== null) {
    for (let i: number = 0; i < content.length; i++) {
      if (content[i] === 'a' || content[i] === 'A') {      
      counter++;
      }
    }
    return counter;
  }  
}

console.log(countingAs('afile.txt'));
console.log(countingAs('file.txt'));