/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];

  //   O(1) space
  //   if (N < 2) return N;

  //   let sum = 1,
  //     prev = 0;

  //   for (let i = 2; i <= N; i++) {
  //     sum += prev;
  //     prev = sum - prev;
  //   }

  //   return sum;
};
// @lc code=end
