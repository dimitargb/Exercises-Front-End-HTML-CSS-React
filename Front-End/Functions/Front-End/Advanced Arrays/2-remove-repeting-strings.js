function removeRepetedElements(arr){

    let noRepetArray = [];

    for(let i = 0; i < arr.length; i++){
        let currentElement = arr[i];

        if(!noRepetArray.includes(currentElement)){
            noRepetArray.push(currentElement)
            
        }
    }

    console.log(noRepetArray.join(' '));
}

removeRepetedElements([7, 8, 9, 7, 2, 3, 4, 1, 2])