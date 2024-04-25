// hasOwnProperty() - проверява дали обекта съдържа такъв ключ !!!
// delete() - изтрива пропертита на обекта.


let obj = {
    firstName: 'Dimitar',
    lastName: 'Damianov',
    town: 'Sofia',
    age: 51
}

if(obj.hasOwnProperty('town')){
    console.log('I love this town!');
    delete obj['lastName']; //  deleting object property
    delete obj.age;// deleting object property
}

console.log(obj);