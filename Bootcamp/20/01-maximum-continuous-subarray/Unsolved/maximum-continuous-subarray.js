const maxSumArray = function (arr) {
  // Write your solution here
  // loop arr
  let max = 0;
  let pre = 0;
  for (let i = 0; i < arr.length; i++) {
    pre = Math.max(pre + arr[i], arr[i]);
    max = Math.max(pre, max);
  }
  return max;
  // loop from i+1 ,add to total, if total> max, replace max
};

console.log(maxSumArray([1, 2, 25, -27, 30]));
console.log(maxSumArray([-1, 2]));
console.log(maxSumArray([1, 2, 3, 4]));
console.log(maxSumArray([1, 2, -50, 4, 5]));
console.log(maxSumArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
