export{}
'use strict'

/*
Create Student and Teacher classes
Student
learn()
question(teacher) -> calls the teachers answer method
Teacher
teach(student) -> calls the students learn method
answer()
*/

class Student {
    learn() {
    console.log('learn');
  }
    question(teacher) {
      teacher.answer();
    }  
}

class Teacher {
  answer() {
    console.log('Answer');
  }
  teach(student) {
    student.learn();
  }
}

let orsi = new Student();
let balazs = new Teacher();

orsi.question(balazs);
balazs.teach(orsi);
