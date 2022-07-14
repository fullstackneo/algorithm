// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function (arr) {
  arr.forEach(el => {
    if (el % 15 === 0) {
      console.log('Fizz Buzz-15');
    } else if (el % 5 === 0) {
      console.log('Buzz-5');
    } else if (el % 3 === 0) {
      console.log('Fizz-3');
    } else {
      console.log(el);
    }
  });
};
fizzBuzz([1, 2, 3, 4, 5, 15, 16]);
