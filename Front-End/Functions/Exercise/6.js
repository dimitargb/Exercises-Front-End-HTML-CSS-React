function validatePassword(password) {
  function checkPasswordLength(password) {
    return password.length >= 6 && password.length <= 10;
  }

  function checkForLettersAndDigits(password) {
    let pattern = /^[A-Za-z0-9]+$/g;
    let isTrue = pattern.test(password);

    return isTrue;
  }

  function countDigits(password) {
    let digitCounter = 0;

    for (const digit of password) {
      if (!isNaN(digit)) {
        digitCounter++;
      }
    }

    return digitCounter >= 2;
  }

  if (!checkPasswordLength(password)) {
    console.log("Password must be between 6 and 10 characters");
  }

  if (!checkForLettersAndDigits(password)) {
    console.log("Password must consist only of letters and digits");
  }

  if (!countDigits(password)) {
    console.log("Password must have at least 2 digits");
  }

  if (
    checkPasswordLength(password) &&
    checkForLettersAndDigits(password) &&
    countDigits(password)
  ) {
    console.log("Password is valid");
  }
}
validatePassword("logIn");
//validatePassword('MyPass123');
//validatePassword('Pa$s$s');
