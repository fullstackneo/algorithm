// Write code to create a function that returns the factorial of `num`

var factorial = function (num) {
  // loop from 1 to num/2+1, if num%x===0, add x to arry
  const arr = [num];
  for (let i = 1; i <= parseInt(num / 2); i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(factorial(4));
