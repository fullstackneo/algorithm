// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

var arraySearch = function (arr) {
  let total = 0;

  const getXNumber = array => {
    array.forEach(el => {
      if (Array.isArray(el)) {
        getXNumber(el);
      } else if (el === 'X') {
        total++;
      }
    });
  };

  getXNumber(arr);
  return total;
};

console.log(
  arraySearch([
    ['O', ['O', [['O', 'X'], 'X']], 'X', 'X'],
    ['O', 'X', ['O', 'X']],
    ['X', 'X'],
  ])
);
