function personalInfo(firstName, lastName, age){

    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    return person;
}
console.log(personalInfo("George", "Smith","18"));
//personalInfo("George", "Smith","18")

const personInfo = (firstName, lastName, age) => {

    return {firstName, 
            lastName, 
            age};
}

console.log(personInfo("Peter", "Pan","20"));