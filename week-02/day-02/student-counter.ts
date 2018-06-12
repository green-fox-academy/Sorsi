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

function candyOwners2(students: any[]): number {
  let candies: number = 0;
  for (let i: number = 0; i < students.length; i++) {
    candies += students[i].candies;
    //console.log(candies);
  }
  return candies;
}

function sumAge2(students: any[]): number {
  let totalAges: number = 0;

  for (let i: number = 0; i < students.length; i++) {
    if (students[i].candies < 5) {
      totalAges += students[i].age;
      //console.log(totalAges);
    }
  }
  return totalAges;
}

console.log(sumAge2(students))

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
