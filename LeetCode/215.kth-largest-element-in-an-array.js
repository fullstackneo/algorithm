/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
       const quickSelect = (arr, k) => {
         left = [];
         right = [];
         random = Math.floor(Math.random() * arr.length);
         arr.forEach((el, i) => {
           if (i === random) return;
           if (el <= arr[random]) left.push(el);
           else right.push(el);
         });

         if (left.length === k) return arr[random];
         if (left.length > k) return quickSelect(left, k);
         else return quickSelect(right, k - left.length - 1);
       };

       return quickSelect(nums, nums.length - k);
};
// @lc code=end

