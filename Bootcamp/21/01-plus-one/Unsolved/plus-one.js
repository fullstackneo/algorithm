// Write a function that takes in an array of digits representing a non negative integer and add one to it. The digits are arranged such that the most significant digits are on the left and each element in the array contains a single digit
// Return the new array
// Solve without joining the digits array and modify the original array in place

var plusOne = function (digits) {
  // if last digit is not 9 return +1
  const length = digits.length;
  for (let i = length - 1; i >= 0; i--) {
    //   for [1,2,3,9]
    if (digits[i] !== 9) {
      digits[i]++;
      break;
    }

    if (digits[i] === 9) {
      digits[i] = 0;
    }

    // for [9,9,9]
    if (i === 0) {
      digits.splice(0, 0, 1);
      break;
    }
  }
  return digits;
};
console.log(plusOne([1, 2, 3]));
console.log(plusOne([1, 9, 9]));
console.log(plusOne([1, 9, 8, 9]));
console.log(plusOne([9]));
