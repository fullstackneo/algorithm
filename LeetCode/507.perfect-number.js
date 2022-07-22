/*
 * @lc app=leetcode id=507 lang=javascript
 *
 * [507] Perfect Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num === 1) return false;
  let arr = [];
  for (let i = Math.floor(num ** 0.5); i >= 1; i--) {
    if ((num / i) % 1 === 0) {
      arr.push(i, num / i);
    }
  }

  return arr.reduce((pre, cur) => pre + cur, 0) === num * 2;
};
// @lc code=end
