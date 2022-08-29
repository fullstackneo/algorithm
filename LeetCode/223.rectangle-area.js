/*
 * @lc app=leetcode id=223 lang=javascript
 *
 * [223] Rectangle Area
 */

// @lc code=start
/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  let area1 = (ax2 - ax1) * (ay2 - ay1);
  let area2 = (bx2 - bx1) * (by2 - by1);
  let condition1 = Math.min(ax2, bx2) - Math.max(bx1, ax1);
  let condition2 = Math.min(ay2, by2) - Math.max(by1, ay1);
  if (condition1 > 0 && condition2 > 0) {
    return area1 + area2 - condition1 * condition2;
  } else {
    return area1 + area2;
  }
};
// @lc code=end
