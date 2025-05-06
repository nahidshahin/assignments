"use strict";

class Question {
    constructor(qid, answer) {
        this.qid = qid;
        this.answer = answer;
    }

    checkAnswer(a) {
        return this.answer == a;
    }
}

class Student {
    constructor(studentId) {
        this.studentId = studentId;
        this.answers = [];
    }

    addAnswer(q) {
        this.answers.push(q);
    }
}

class Quiz {
    constructor(qs, ss) {
        this.questions = new Map();
        qs.forEach(q => this.questions.set(q.qid, q.answer));
        this.students = ss;
    }

    scoreStudentBySid(sid) {
        let s = this.students.find(s => s.studentId == sid);
        if (!s) return 0;
        return s.answers.reduce((sum, a) => 
            sum + (this.questions.get(a.qid) == a.answer ? 1 : 0), 0 );
    }

    getAverageScore() {
        if (this.students.length == 0) return 0;
        return this.students.reduce((sum, s) => 
            sum + this.scoreStudentBySid(s.studentId), 0) 
        / this.students.length;
    }
}

const student1 = new Student(10); 
student1.addAnswer(new Question(2, 'a')); 
student1.addAnswer(new Question(3, 'b')); 
student1.addAnswer(new Question(1, 'b')); 
const student2 = new Student(11); 
student2.addAnswer(new Question(3, 'b')); 
student2.addAnswer(new Question(2, 'a')); 
student2.addAnswer(new Question(1, 'd')); 
const students = [student1, student2]; 
const questions =[new Question(1, 'b'), new Question(2, 'a'), new 
Question(3, 'b')]; 
const quiz = new Quiz(questions, students); 
let scoreforStudent10 = quiz.scoreStudentBySid(10); 
console.log(scoreforStudent10); //Expected Result: 3 
let scoreforStudent11 = quiz.scoreStudentBySid(11); 
console.log(scoreforStudent11); //Expected Result: 2 
let average = quiz.getAverageScore(); 
console.log(average); //Expected Reuslt: 2.5