'use strict';

let students: any[] = [
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function moreThan4Candies (input: any[]) {
  let listMoreThan4CandiesOwner: any[] = [];
  input.forEach(input => {
    if (input.candies > 4) {
      listMoreThan4CandiesOwner.push(input.name);
    }
  });
  return listMoreThan4CandiesOwner;
}

console.log(moreThan4Candies(students))