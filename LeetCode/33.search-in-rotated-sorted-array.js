/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
        let start = 0;
        let end = nums.length - 1;
        while (start <= end) {
          let mid = Math.floor((start + end) / 2);
          if (nums[mid] === target) return mid;
          if (nums[mid] >= nums[start]) {
            if (nums[mid] > target && target >= nums[start]) {
              end = mid - 1;
            } else {
              start = mid + 1;
            }
          } else if (nums[mid] < nums[start]) {
            if (nums[mid] < target && target < nums[start]) {
              start = mid + 1;
            } else {
              end = mid - 1;
            }
          }
        }

        return -1;
};
// @lc code=end

