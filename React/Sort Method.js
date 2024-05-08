const arr = [7, 3, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b);
console.log(sorted); // sorted fom small to big
console.log(arr); // mutates the original array, that's why we use slice to make a copy first.

// The sort Method mutates(changes) the original array.

// In order not to change the array we first do a copy by using slice metohod.
