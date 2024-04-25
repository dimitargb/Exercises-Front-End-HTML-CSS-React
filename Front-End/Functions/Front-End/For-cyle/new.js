
// function evenNumbers(arr) {

//     for (let index = 0; index < arr.length; index++) {
//         if(arr[index] % 2 === 0){
//             console.log(arr[index]);
//         }
        
//     }
// }

// evenNumbers([13,23,12,45,22,48,66,100])

// let finalNum = 22;

// for(let i = 2; i <= finalNum; i+=2){
//    console.log(i);
// }
let arr1 = [4,6,7];
let arr2 = [8,1,9];
let sum = [];

// const result = arr1.map(a => a + arr2[i]);
// console.log(result)

for(let i = 0; i<arr1.length; i++){
    sum.push(arr1[i]+arr2[i])
}
console.log(sum);

