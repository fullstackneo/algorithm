/*
 * @lc app=leetcode id=137 lang=javascript
 *
 * [137] Single Number II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else if (map[nums[i]] === 1) {
      map[nums[i]]++;
    } else {
      map.delete(nums[i]);
    }
  }
  return map.keys().next().value;
};
// @lc code=end
