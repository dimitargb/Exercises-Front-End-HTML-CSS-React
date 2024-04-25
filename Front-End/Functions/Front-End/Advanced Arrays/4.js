function sortingNumbers(arr){
    let finalArray = [];
    let sortedArray = arr.sort((a, b) => b - a);
    
    let sortedArrayLength = sortedArray.length;
    for(let i = 0; i < sortedArrayLength; i++){
        
        let firtsNumber = sortedArray.shift();
        let secondNumber = sortedArray.pop();
       
        finalArray.push(firtsNumber);
        finalArray.push(secondNumber);
    
    }

    console.log(finalArray.join(' '));
}
sortingNumbers([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])