//Ключовата дума this в JS дава рефернция към текущия обект.
//Ключовата дума this дава достъп до всички вътрешнаи проперита на обекта !!!

//Примиер:

const obj = {
    firstName: 'Mitko',
    age: 51,
    town: 'Sofia',
    printInfo(){
        console.log(`Information about this person is: ${this.firstName}, ${this.age}, ${this.town}`);
    },
}

obj.printInfo();