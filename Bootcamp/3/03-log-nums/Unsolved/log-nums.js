// Write code to print all numbers from 1 to `num`
// Assume `num` will be a positive number

var logNums = function (num) {
  let count = 1;
  while (num-- >= 1) {
    console.log(count++);
  }
};

logNums(4);
