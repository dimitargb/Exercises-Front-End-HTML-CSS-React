function calculate(num){
    let oddSum = 0;
    let evenSum = 0;
    let numToString = String(num);
    
    
    for(let i = 0; i < numToString.length; i++){
        
        let currentString = Number(numToString[i]);
        
        if(currentString % 2 === 0){
            evenSum += currentString;
        } else {
            oddSum += currentString;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
   
    
    
}
calculate(1000435);
calculate(3495892137259234);