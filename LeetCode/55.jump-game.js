/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxIndex = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (maxIndex < i) return false;
    if (i + nums[i] > maxIndex) maxIndex = i + nums[i];
  }

  return true;
};
// @lc code=end
