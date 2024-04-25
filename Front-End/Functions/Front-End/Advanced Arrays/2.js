function findUniqueNumbers(arr){

    let uniqueNumbers = new Set(arr);
    console.log(...uniqueNumbers);


}
findUniqueNumbers([20, 8, 12, 13, 4, 4, 8, 5])

// using Filter Method()
let arr = [1,2,3,4,5,6,7,8]
let newArr = arr.filter((e) =>  e % 2 !== 0);
let slicedArr = arr.slice(0, 2);


let arr2 = [1,7,7,1,2,3];
let manipulatedArray = arr2.splice(0, 2);
let sorted = arr2.sort((a, b) => {
    return b - a;
});
console.log(newArr);
console.log(slicedArr);
console.log(arr2);
console.log(Math.max(...arr));
console.log(sorted);