// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function (str) {
  if (str.length % 2 !== 0) return false;
  if (str === '') return true;

  const arr = str.split('').sort();

  return arr.findIndex(el => el === '1') === arr.length / 2;
  // sort 0,1, find first index of 1, if index===str.length/2
};

console.log(zeroesAndOnes('100011'));
