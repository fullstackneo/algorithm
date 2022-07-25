/*
 * @lc app=leetcode id=645 lang=javascript
 *
 * [645] Set Mismatch
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let arr = new Array(nums.length).fill(-1);
  let result = [];

  nums.forEach(el => {
    if (arr[el - 1] !== -1) result[0] = el;
    arr[el - 1] = el;
  });

  result[1] = arr.indexOf(-1) + 1;
  return result;
};
// @lc code=end
