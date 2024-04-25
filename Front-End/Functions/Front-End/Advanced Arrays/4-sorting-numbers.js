function sortingNumbers(arr){
    let finalArray = [];
    let sortedArray = arr.sort((a, b) => b - a);
    
    let sortedArrayLength = sortedArray.length;
    for(let i = 0; i < sortedArrayLength; i++){
        
        if(i % 2 === 0){
            finalArray.push(sortedArray.shift());
        } else {
            finalArray.push(sortedArray.pop());
        }
    }

    console.log(finalArray.join(' '));
}
sortingNumbers([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])