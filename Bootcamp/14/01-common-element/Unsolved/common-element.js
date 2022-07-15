// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

var commonElement = function (arrA, arrB) {
  // change arrA to {el1:true, el2:true..  }
  const objA = Object.fromEntries(arrA.map(el => [el, true]));

  // loop arrB, if objA[el] is true, return the value of arrB
  return arrB.find(el => objA[el]);
};

console.log(commonElement([4, 3, 6], [1, 2, 3]));
