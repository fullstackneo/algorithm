/*
 * @lc app=leetcode id=643 lang=javascript
 *
 * [643] Maximum Average Subarray I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = nums.slice(0, k).reduce((res, cur) => res + cur, 0);
  let pre = sum;
  for (let i = k; i < nums.length; i++) {
    // sum=Math.max(sum,pre+nums[i]-nums[i-k]);
    // pre=pre+nums[i]-nums[i-k];

    let cur = pre + nums[i] - nums[i - k];
    if (cur > sum) sum = cur;
    pre = cur;
  }

  return sum / k + 0.0;
};
// @lc code=end
