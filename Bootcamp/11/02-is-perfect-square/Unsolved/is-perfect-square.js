// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function (num) {
  // loop from 1 to num/2, if num%i===i, return true
  //   for (let i = 1; i * i <= num; i++) {
  //     if (num / i === i) {
  //       return true;
  //     }
  //   }
  //   return false;

  let i = 1;
  while (true) {
    if (i * i === num) {
      return true;
    } else if (i * i > num) {
      return false;
    }
    i++;
  }
};

console.log(isPerfectSquare(16));
