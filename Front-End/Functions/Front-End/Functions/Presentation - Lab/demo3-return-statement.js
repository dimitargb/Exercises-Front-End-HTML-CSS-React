function readFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
const fullName = readFullName("John", "Smith");
console.log(fullName); //John Smith;

console.log(readFullName("John", "Smith"));


function printName(firstName, lastName){
    return firstName + ' ' + lastName;
}

let result = printName('Dimitar', 'Damianov');
console.log(result);
console.log(printName('Dimitar', 'Damianov'));

function callPreviousFunctions(a, b, c){
    return (a + b) * c + ' ' + repeateStars(8) + ' ' + printName('Dimitar', 'Damianov');
}
console.log(callPreviousFunctions(5, 1, 2));

function repeateStars(a){
    return '*'.repeat(a)
}

console.log(repeateStars(5));