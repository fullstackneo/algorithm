/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // greedy approach
  // T.C: O(N)
  // S.C: O(1)
  if (nums.length === 1) return 0;
  let jump = 0;
  let maxIndex = nums[0];
  let steps = nums[0];
  for (let i = 1; i < nums.length; i++) {
    steps--;
    if (steps < 0) {
      steps = maxIndex - i;
      jump++;
    }
    maxIndex = Math.max(maxIndex, i + nums[i]);
  }
  return jump + 1;

  // dp
  //   let dp = new Array(nums.length);
  //   dp[dp.length - 1] = 0;
  //   for (let i = dp.length - 2; i >= 0; i--) {
  //     let jumps = nums[i];
  //     let min = Infinity;
  //     for (let j = 1; j <= jumps; j++) {
  //       if (i + j >= dp.length) break;
  //       min = Math.min(1 + dp[i + j], min);
  //     }
  //     dp[i] = min;
  //   }
  //   return dp[0];
  // T.C: O(N^2)
  // S.C: O(N)
};
// @lc code=end
