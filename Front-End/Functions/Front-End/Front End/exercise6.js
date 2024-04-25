function compareNymbers(arr) {
  let foundIndex = "no";
  let arrayLength = arr.length;

  for (let i = 0; i < arrayLength; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < i; j++) {
      leftSum += arr[j];
    }

    for (let k = i + 1; k < arrayLength; k++) {
      rightSum += arr[k];
    }

    if (leftSum === rightSum) {
      foundIndex = i;
    }
  }

  console.log(foundIndex);
}
compareNymbers([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
compareNymbers([1, 2, 3])
compareNymbers([1])
