// const arr = [2,4,1,5];
// let sum = 0
// for(let i = 0; i < arr.length; i++){
//     sum = sum + arr[i];
   
// }
// console.log(sum);

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];

let sum1 = 0;
let sum2 = 0;
let totalSum = 0;

for(let i = 0; i < arr_1.length; i++){
    sum1+=arr_1[i];
}

for(let a = 0; a < arr_2.length; a++){
    sum2+=arr_2[a];

}

totalSum = sum1 + sum2;
console.log(totalSum);