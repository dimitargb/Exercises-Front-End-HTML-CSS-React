let arr = [4,5,6,7,8]
let newArr = [];

for(let i = 0; i < arr.length; i++){
    let currentElement = Number(arr[i]);

    if(currentElement % 2 === 0){
        newArr.push(currentElement + 2)
    };
   
}
console.log(typeof newArr[0]);