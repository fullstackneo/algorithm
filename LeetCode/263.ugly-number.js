/*
 * @lc app=leetcode id=263 lang=javascript
 *
 * [263] Ugly Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n === 1) return true;

  while (Number.isInteger(n)) {
    n /= 2;
    if (n === 1) return true;
  }
  n = n * 2;


  while (Number.isInteger(n)) {
    n /= 3;
    if (n === 1) return true;
  }
  n = n * 3;

  if (
    n.toString()[n.toString.length - 1] !== 5 ||
    n.toString()[n.toString.length - 1] !== 0
  ) {
    return false;
  }

  while (Number.isInteger(n)) {
    n /= 5;
    if (n === 1) return true;
  }
  return false;
};
// @lc code=end
