/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let oddIndex = 0;
  nums.forEach((el, i, arr) => {
    if (el % 2 === 0) {
      [arr[i], arr[oddIndex]] = [arr[oddIndex], arr[i]];
      oddIndex++;
    }
  });
  return nums;
};
// @lc code=end
