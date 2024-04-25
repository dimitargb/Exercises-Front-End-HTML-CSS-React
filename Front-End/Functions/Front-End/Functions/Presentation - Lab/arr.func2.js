// Arrow function with body:

let addNumber = (a, b) => {
    return a + b;
}
console.log(addNumber(5, 7));

// Arrow function without a body:

let mulitply = (b, c) => b * c;
console.log(mulitply(2, 8));

// Arrow function with one parameter:

let substract = x =>  x - 15;
console.log(substract(25));

const person = {
    name: 'Peter'
};

function greed(){
    console.log(this.name + ' syas hi!');
}
 
greed.call(person);
greed.apply(person)
 
let bind = greed.bind(person);
 bind();