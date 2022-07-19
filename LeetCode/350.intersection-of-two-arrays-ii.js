/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // put into obj [index: times]
  const obj = {};
  nums1.forEach(el => {
    obj[el] = obj[el] + 1 && 1;
  });
  // arr
  const arr = [];

  // loop nums2, if obj[x]>=1, --. push to arr
  nums2.forEach(el => {
    if (obj[el] >= 1) {
      arr.push(el);
      obj[el]--;
    }
  });

  return arr;
};
// @lc code=end
