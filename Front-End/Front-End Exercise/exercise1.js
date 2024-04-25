function addAndSubstarct(arr) {
  let newArray = [];
  let sumArray = 0;
  let sumNewArray = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentNumber = Number(arr[i]);
    let odd = currentNumber - i;
    let even = currentNumber + i;

    if (currentNumber % 2 === 0) {
      newArray.push(even);
    } else {
      newArray.push(odd);
    }

    sumArray += currentNumber;
    sumNewArray += newArray[i];
  }
  console.log(newArray);
  console.log(sumArray);
  console.log(sumNewArray);
}
addAndSubstarct([5, 15, 23, 56, 35]);
