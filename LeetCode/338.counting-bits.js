/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(i.toString(2).replace(/0/g, '').length);
  }
  return arr;
};
// @lc code=end
