let person = {
    name: 'Dimitar',
    age: 51,
}

console.log(person.age);
// Добавяне на функция към обекта
person.fullName = () =>{console.log('Dimitar Damianov')};
// Извикване на функцията
person.fullName()

// Adding arrow function to an object!!!
let personalInformation = {
    fullName: 'Dimitar Damianov',
    catName: 'Jessy',
    age: 51,
    hasCat:()=>{
        console.log('Dimitar Damianov has a cat called Jessy!');
    },
    catColor: function(){
        console.log(this.fullName);
    },
    catAge: (age)=>{
        return `The cat is ${age} years old!`
    },
    sayHi(){
        console.log('Say hello to Dimitar.');
    }
}

// Извикване на функиця от обект!!!
personalInformation.hasCat();
personalInformation.catColor();
console.log(personalInformation.catAge(6));
personalInformation.sayHi();
