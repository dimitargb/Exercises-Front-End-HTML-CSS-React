function findMatches(arr1, arr2) {
  for(const element of arr1){

    if(arr2.includes(element)){
      console.log(element);
    }
  }
}
findMatches(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
