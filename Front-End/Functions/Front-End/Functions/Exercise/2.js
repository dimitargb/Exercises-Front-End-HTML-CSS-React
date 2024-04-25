function addAndSubstarct(num1, num2, num3){
    let sum = (num1, num2) => {
        return num1 + num2;
    };
    
   
    let substarct = (sum, num3) =>  sum - num3;

    console.log(substarct(sum(num1, num2), num3));
}
addAndSubstarct(42, 58, 100)