function findMatches(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let currentElofArr1 = arr1[i];
    for (let k = 0; k < arr2.length; k++) {
      let currentElofArr2 = arr2[k];

      if (currentElofArr1 === currentElofArr2) {
        console.log(currentElofArr1);
      }
    }
  }
}

findMatches(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
findMatches(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])
