let calculate = function(a, b){
    let result = a * b;
    console.log(result);
}

calculate(2, 4);

let divide = function(a, b){
    return a / b;
}

console.log(divide(102, 2));

let repeatDollars = function(a){
    return  '$'.repeat(a);
}

console.log(repeatDollars(3));

let prtintName = function(firstName, lastName){
    return firstName + ' ' + lastName + ' ' + repeatDollars();
}
console.log(prtintName('Dimitar', 'Damianov'));


