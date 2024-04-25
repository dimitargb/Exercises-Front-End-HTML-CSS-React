// Obeject.keys metod - извиква всички ключове
// Obect.values method - извикава всички стойности
// Object.entries method - извиква всички ключове и стойности
let personalInformation = {
    fullName: 'Dimitar Damianov',
    catName: 'Jessy',
    age: 51,
}

// Obeject.keys metod - извиква всички ключове
// Това връща масив от ключовете от обекта - [fullName, catName, age]

console.log(Object.keys(personalInformation));
console.log(Object.values(personalInformation));
console.log(Object.entries(personalInformation));
