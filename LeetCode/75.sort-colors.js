/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  //splice
  let m = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[m] === 1) {
      m++;
    } else if (nums[m] === 0) {
      nums.unshift(nums.splice(m, 1));
      m++;
    } else {
      nums.push(nums.splice(m, 1));
    }
  }

  //destructure
  const swap = (a, b) => {
    [nums[a], nums[b]] = [nums[b], nums[a]];
  };

  let left = 0;
  let right = nums.length - 1;
  let cur = 0;

  while (cur <= right) {
    if (nums[cur] === 0) {
      swap(cur++, left++);
    } else if (nums[cur] === 2) {
      swap(cur, right--);
    } else {
      cur++;
    }
  }
};
// @lc code=end
