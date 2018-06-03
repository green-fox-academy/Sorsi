export { }

'use strict';

let students: any[] = [
  { name: 'Teodor', age: 3, candies: 2 },
  { name: 'Rezso', age: 9.5, candies: 2 },
  { name: 'Zsombor', age: 12, candies: 5 },
  { name: 'Aurel', age: 7, candies: 3 },
  { name: 'Olaf', age: 12, candies: 7 },
  { name: 'Gerzson', age: 10, candies: 1 },
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function candyOwners(students: any[]): number {
  let totalCandies: number = 0;
  students.forEach(function (value) {
    totalCandies += value.candies;
  });
  return totalCandies;
}

console.log(candyOwners(students));

function sumAge(input: any[]): number {
  let totalAge: number = 0;
  input.forEach(students => {
    if (students.candies < 5) {
      totalAge += students.age;
    }
  }
  )
  return totalAge;
}

console.log(sumAge(students));
