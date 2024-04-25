// arrow function

let addNumbers = (x) => x + 5;
console.log(addNumbers(4));

let substractNumbers = (a)=>{
    return a / 2;
}
console.log(substractNumbers(8));

const arr = [1,2,3,4,5,6,7,8,9,10]

const[a, b, c,...restOFTheNumbers] = arr;
console.log(b);
console.log(restOFTheNumbers);

const arrowFunction = (a)=> {
   return a + 2;
    
}


let newArray = arr.map((a)=> a / 2);
let newArray2 = arr.filter((x)=> x < 6);
let newArray3 = arr.find((el)=> el > 5);

// function addNumber(arr, number){
//     return arr.map(el=> el + number);
// }
//     console.log(addNumber([1,2,3,4,5],1));
console.log(newArray3);
console.log(newArray);
console.log(newArray2);


console.log(arrowFunction(1));
console.log(arr);

function addN(arr, n){
    return arr.map(item => item + n)
  } 
    
  console.log(addN([5, 4], 2))