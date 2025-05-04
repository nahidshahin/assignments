"use strict";

let student = {
    firstName: '',
    lastName: '',
    grades: [],
    inputNewGrade: function(newGrade) {
      this.grades.push(newGrade);
    },
    computeAverageGrade: function() {
      return this.grades.reduce((sum, g) => sum + g, 0) 
      / this.grades.length;
    }
  };
  
  let student1 = Object.create(student);
  student1.firstName = 'Nahid';
  student1.lastName = 'Mahbub';
  student1.grades = [85, 90, 92];
  let student2 = Object.create(student);
  student2.firstName = 'Mohammad';
  student2.lastName = 'Mohammad';
  student2.grades = [88, 82, 90];

  let students = [student1, student2];

  let avg = students
  .reduce((sum, s) => sum + s.computeAverageGrade(), 0) 
  / students.length;
  
  console.log(avg);