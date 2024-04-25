// Destructuring an Array 

const arr = [1,2,3,4,5,6,7,8,9,10]

const[a,b,c,d,e,f,...restOfTheNumbers] = arr;
console.log(e);
console.log(restOfTheNumbers);