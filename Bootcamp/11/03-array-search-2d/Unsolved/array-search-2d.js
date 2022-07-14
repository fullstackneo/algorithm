// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

var arraySearch2D = function (arr) {
  // loop the arr, total = 0
  let total = 0;
  // for each son arr, sort and find the index of O, return the index of O, if index ===-1, return length
  arr.forEach(sonArr => {
    sonArr.forEach(el => {
      if (el === 'X') {
        total++;
      }
    });
  });
  return total;
};

console.log(
  arraySearch2D([
    ['O', 'X', 'X', 'X'],
    ['O', 'X', 'O'],
    ['X', 'X'],
  ])
);
