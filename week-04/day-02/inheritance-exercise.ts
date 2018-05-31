'use strict'
export {}

class Person {
  name: string;
  age: number;
  gender: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
    this.name = name
    this.age = age;
    this.gender = gender;
  }

  public introduce() {
    return `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}`;
  }
  public getGoal() {
    return 'My goal is: Live for the moment!';
  }
}

class Student {
  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'The School of Life', skippedDays: number = 0) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.skippedDays = skippedDays;
    this.previousOrganization = previousOrganization;
  }

  public introduce() {
    return `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} daysfrom the course already.`;
  }
  public getGoal() {
    return 'My goal is: Be a junior software developer.';
  }
  public skipDays(numberOfDays) {
    return this.skippedDays + numberOfDays;
  }  
}

class Mentor {
  name: string;
  age: number;
  gender: string;
  level: string;

  public introduce() {
    return `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`;
  }
  public getGoal() {
    return 'My goal is: Educate brilliant junior software developers.';
  }

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'intermediate'){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }
}

class Sponsor {
  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number;

  public introduce() {
    return `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`;
  }
  public getGoal() {
    return 'My goal is: Hire brilliant junior software developers.';
  }
  public hire() {
    this.hiredStudents++;
  }

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', 
  company: string = 'Google', hiredStudents: number = 0){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.company = company;
    this.hiredStudents = hiredStudents;
  }
}

class Cohort {
  name: string;
  students: Student [];
  mentors: Mentor [];

  constructor(name: string) {
    this.name = name;
    this.students = [];
    this.mentors = [];
  }

  addStudent(Student) {
    this.students.push(student);
  }

  addMentor(Mentor) {
    this.mentors.push(mentor);
  }

  info() {
    return `The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`
  }
}

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');

console.log(student.skipDays(3));

for (let i: number = 0; i < 6; i++) {
  elon.hire();
}

for (let i: number = 0; i < 4; i++) {
 sponsor.hire();
}

for (let person of people) {
  console.log (person.introduce());
  console.log(person.getGoal());
}

console.log(sponsor.introduce());
console.log(sponsor.getGoal());
console.log(elon.introduce());
console.log(elon.getGoal());


let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();