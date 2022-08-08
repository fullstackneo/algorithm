/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
     let start = 0;
     let end = nums.length - 1;
     let mid;
     let result = [];
     while (start <= end) {
       mid = Math.floor((start + end) / 2);
       if (nums[mid] >= target) {
         end = mid - 1;
       } else {
         start = mid + 1;
       }
     }

     if (nums[start] !== target) return [-1, -1];

     result[0] = start;
     end = nums.length - 1;
     while (start <= end) {
       mid = Math.floor((start + end) / 2);
       if (nums[mid] <= target) {
         start = mid + 1;
       } else {
         end = mid - 1;
       }
     }
     result[1] = end;
     return result;
};
// @lc code=end

