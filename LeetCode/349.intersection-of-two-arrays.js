/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // object
  const obj = Object.fromEntries(nums1.map(el => [el, true]));
  return nums2.filter(el => obj[el]);

  // set
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  return [...set1].filter(el => set2.has(el));
};
// @lc code=end
