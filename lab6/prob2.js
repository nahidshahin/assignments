"use strict";

function Student(firstName, lastName, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
}

Student.prototype.inputNewGrade = function(newGrade) {
    this.grades.push(newGrade);
};
  

Student.prototype.computeAverageGrade = function() {
    return this.grades.reduce((sum, g) => sum + g, 0) 
    / this.grades.length;
};

let students = [
    new Student('Nahid', 'Mahbub', [85, 90, 92]),
    new Student('Mohammad', 'Mohammad', [88, 82, 90])
  ];

  let avg = students
  .reduce((sum, s) => sum + s.computeAverageGrade(), 0) 
  / students.length;
  
  console.log(avg);