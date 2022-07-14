// Write code to add all the numbers in `arr` and return the total

var sumArray = function (arr) {
  let total = 0;
  arr.forEach(el => {
    total += el;
  });
  return total;
};

console.log(sumArray([1, 2, 3, 4]));
