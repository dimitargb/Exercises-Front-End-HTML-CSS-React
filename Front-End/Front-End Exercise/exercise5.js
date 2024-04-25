function printMaxNumber(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let isBiggerNuber = true;
    let currentNumber = arr[i];

    for (let k = i + 1; k < arr.length; k++) {
      if (currentNumber <= arr[k]) {
        isBiggerNuber = false;
      }
    }

    if (isBiggerNuber) {
      newArray.push(currentNumber);
    }
  }

  console.log(newArray.join(" "));
}
printMaxNumber([14, 24, 3, 19, 15, 17]);
