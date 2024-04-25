class Person {
    constructor(firstName, lastName, age, town){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.town = town;
    }
}

let firstPerson = new Person('Peter','Petrov', 34, 'Sofia');
console.log(firstPerson);