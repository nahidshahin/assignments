"use strict";

function Question(qid, answer) {
    this.qid = qid;
    this.answer = answer;
}

Question.prototype.checkAnswer = function (a) {
    return this.answer == a;
};

function Student(studentId) {
    this.studentId = studentId;
    this.answers = [];
}

Student.prototype.addAnswer = function (q) {
    this.answers.push(q);
};

function Quiz(qs, ss) {
    this.questions = new Map();
    qs.forEach(q => this.questions.set(q.qid, q.answer));
    this.students = ss;
}

Quiz.prototype.scoreStudentBySid = function (sid) {
    let s = this.students.find(s => s.studentId == sid);
    if (!s) return 0;    
    return s.answers.reduce((sum, a) => 
        sum + (this.questions.get(a.qid) == a.answer ? 1 : 0), 0 );
};

Quiz.prototype.getAverageScore = function () {
    return this.students.length == 0 ? 0 : 
        (this.students.reduce((sum, s) => 
            sum + this.scoreStudentBySid(s.studentId), 0) 
        / this.students.length);
};

let student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));

let student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));

let students = [student1, student2];
let questions = [
    new Question(1, 'b'),
    new Question(2, 'a'),
    new Question(3, 'b')
];

let quiz = new Quiz(questions, students);

console.log(quiz.scoreStudentBySid(10)); // Expected: 3
console.log(quiz.scoreStudentBySid(11)); // Expected: 2
console.log(quiz.getAverageScore());     // Expected: 2.5
