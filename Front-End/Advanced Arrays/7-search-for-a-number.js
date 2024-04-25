function searchingForNumber(arr1, arr2){

    let numbersToTake = Number(arr2[0]);
    let takenNumbers = arr1.slice(0, numbersToTake);
    let nymbersToDelete = Number(arr2[1]);
    
    takenNumbers.splice(0, nymbersToDelete);
    let numberWeSearchFor = Number(arr2[2]);

    let counter = 0;

   takenNumbers.forEach(number =>{
       
        if(number === numberWeSearchFor){
            counter++;
        }
   })
    
   console.log(`Number ${numberWeSearchFor} occurs ${counter} times.`);
}
searchingForNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);
searchingForNumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]);