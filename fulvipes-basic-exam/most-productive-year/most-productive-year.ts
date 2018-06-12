/** 
 * Write a function called `findMostProductiveYear` that helps you find the most productive year for a film studio.
 * The function should take one argument, which is the name of the film studio.
 * The function should try to open the related data file named `studioname`.csv,
 * which is a comma separated file with 3 columns: name of the movie, release year, director
 * 
 *  - If we do not have any data about the studio, the function should return an error message.
 *  - If we have found data, the function should return an information message about the most productive year for studio.
 * 
 * Examples:
 *  - If we call the function with 'marvel'
 *  - should return 'marvel has made the most movies in 2017.'
 * 
 *  - If we call the method with 'ghibli':
 *  - should print, 'Cannot find studio, please try again later.'.
 * 
 * Hint: 
 *  - You can find some example files in this folder. (marvel.csv, paramount.csv)
 *  - Most productive year: The year in which the studio has made the most movies.
 */
'use strict';

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

function findMostProductiveYear(filename: string): string {
  try {
    let content = fs.readFileSync(`${filename}.csv`, charEncoding).split('\r\n').map(Element => {
      return Element.substr(Element.indexOf(',') + 1, 4);
    });
    let yearList: Object = yearCount(content);
    let years: string[] = Object.getOwnPropertyNames(yearList);
    let max: string = years[0];
    for (let i: number = 1; i < years.length; i++) {
      if (yearList[max] < yearList[years[i]]) {
        max = years[i];
      }
    }
    return  `${filename} has made the most movies in ${max}`;
  }
  catch (err) {
    return `Can't find studio "${filename}", please try again.`;
  }

}

function yearCount(array: string[]): Object {
  let counter: Object = {};
  for (let i: number = 0; i < array.length; i++) {
    let year = array[i];
    if (counter[year]) {
      counter[year]++;
    } else {
      counter[year] = 1;
    }
  }
  return counter;
}

console.log(findMostProductiveYear('marvel'));

/********************************
 * Do not modify the code below *
 ********************************/
export default findMostProductiveYear;
