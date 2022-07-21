/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    return nums.reduce((pre, cur) => {
        count = cur ? count+1 : 0;
        return Math.max(pre,count)
    },0)
};
// @lc code=end

