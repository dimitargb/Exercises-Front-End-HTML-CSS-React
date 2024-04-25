function trackGuest(arr) {
  let listArray = [];

  for (let i = 0; i < arr.length; i++) {
    let currentLine = arr[i];
    let firstLine = currentLine.split(" ");
    let name = firstLine[0];

    if (firstLine.length === 3) {
      if (listArray.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        listArray.push(name);
      }
    } else {
      if (!listArray.includes(name)) {
        console.log(`${name} is not in the list!`);
      } else {
        let searchedIndex = listArray.indexOf(name);
        listArray.splice(searchedIndex, 1);
      }
    }
  }
  console.log(listArray.join("\n"));
}
trackGuest([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
