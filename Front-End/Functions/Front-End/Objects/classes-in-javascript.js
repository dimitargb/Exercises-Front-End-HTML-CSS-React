//Класовете са шаблони и темплейти по които ние работим и създаваме обекти.
//Класовете имат конструртор метод с който се създават обекти.

class Student {
    constructor(name, grade){
        this.name = name;
        this.grade = grade;
    }

    study(){
        this.grade++;
        console.log('Good Job');
    }
};

let firstStudent = new Student('Dimitar', 5.74);
console.log(firstStudent);
let secondStudent = new Student('Antonia', 5.67);
console.log(secondStudent);

firstStudent.study();
console.log(secondStudent);
