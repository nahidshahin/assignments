interface Person {
    name: string;
    age: number;
    isStudent: boolean;
}

function describePerson(person: Person): string {
    const studentOrNot = person.isStudent ? "a student" : "not a student";
    return `${person.name} aged ${person.age} is ${studentOrNot}.`;
}

const person = {
    name: "Alice",
    age: 25,
    isStudent: true
};
console.log(describePerson(person)); 