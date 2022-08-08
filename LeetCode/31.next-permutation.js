/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
        let foundIndex;
        for (let i = nums.length - 2; i >= 0; i--) {
          if (nums[i] >= nums[i + 1]) {
            continue;
          }

          foundIndex = i;

          for (let i = foundIndex + 1; i <= nums.length; i++) {
            if (nums[i] > nums[foundIndex]) {
              continue;
            }
            [nums[i - 1], nums[foundIndex]] = [nums[foundIndex], nums[i - 1]];
            break;
          }

          let m = foundIndex + 1;
          let n = nums.length - 1;
          while (m < n) {
            [nums[m], nums[n]] = [nums[n], nums[m]];
            m++;
            n--;
          }
          break;
        }

        if (foundIndex === undefined) return nums.sort((a, b) => a - b);

        return nums;
};
// @lc code=end

