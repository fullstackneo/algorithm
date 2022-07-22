/*
 * @lc app=leetcode id=628 lang=javascript
 *
 * [628] Maximum Product of Three Numbers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  if (nums.length === 3) return nums.reduce((total, cur) => total * cur, 1);

  nums.sort((a, b) => b - a);
  let a = nums[0];
  let b = nums[1];
  let c = nums[2];

  return Math.max(a * b * c, a * nums[nums.length - 1] * nums[nums.length - 2]);
};
// @lc code=end
