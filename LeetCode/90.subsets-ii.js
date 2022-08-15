/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort();
  let result = [];
  const process = (arr, lastIndex) => {
    result.push(arr);
    for (let i = 1; i < nums.length - lastIndex; i++) {
      arr.push(nums[lastIndex + i]);
      process([...arr], lastIndex + i);
      while (nums[lastIndex + i] === nums[lastIndex + i + 1]) i++;
      arr.pop();
    }
  };
  process([], -1);
  return result;
};
// @lc code=end
