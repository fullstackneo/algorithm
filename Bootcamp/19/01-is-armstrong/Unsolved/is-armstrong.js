// Write a function that takes a positive integer and returns true if the integer is an armstrong number, else return false. To find out if a number is an armstrong number, take each individual digit and raise it to the power of the length of the entire number and add the digits. If the sum equals the original number, the number is an armstrong number

var isArmstrong = function (num) {
  // change to string, get the length

  const arr = String(num)
    .split('')
    .map(el => parseInt(el));

  // loop each char and check
  let total = 0;
  arr.forEach(el => (total += Math.pow(el, arr.length)));
  return num === total;
};

console.log(isArmstrong(153));
