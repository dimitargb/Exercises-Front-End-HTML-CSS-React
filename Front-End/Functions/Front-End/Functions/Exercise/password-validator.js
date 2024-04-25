function validatePassword(pass){

    function isValidLength(input){

        return input.length >= 6 && input.length <= 10;
    };

    function isContainingDigitAndSymbols(string){

        let pattern = /^[A-Za-z0-9]+$/g;
        let isCorrect = pattern.test(string);

        return isCorrect;
    };

    function countDigits(text){
        let digitCounter = 0;

        for (const digit of text) {
            if(!isNaN(digit)){
                digitCounter++;
            }
        }
        return digitCounter >= 2;
    }



    if(!isValidLength(pass)){
        console.log('Password must be between 6 and 10 characters');
    };

    if(!isContainingDigitAndSymbols(pass)){
        console.log('Password must consist only of letters and digits');
    };

    if(!countDigits(pass)){
        console.log('Password must have at least 2 digits');
    };

    if(isValidLength(pass) && isContainingDigitAndSymbols(pass) && countDigits(pass)){
        console.log('Password is valid');
    }

}
validatePassword('logIn')