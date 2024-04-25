// Function Declaration
function repeatString(string, count){
     let result = string.repeat(count);
     console.log(result);
}
repeatString("String", 2);

// Function Expression
let repetedString = function(string, count){
    return string.repeat(count)
}

console.log(repetedString("String", 2));

function printName(name){

    if(typeof name === 'number'){
        return;
    }

    return `Hello, ${name}!`;
}

console.log(printName('Victoria'));
console.log(printName(15));

