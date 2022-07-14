// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function (arr) {
  return arr.sort((a, b) => a - b).slice(arr.length - 2);
};

console.log(productOfLargestTwo([11, 23, 1, 324, 421, 123]));
