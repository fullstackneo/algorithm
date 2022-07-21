/*
 * @lc app=leetcode id=504 lang=javascript
 *
 * [504] Base 7
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  if (num === 0) return '0';

  let cal = Math.abs(num);
  let result = '';
  while (cal !== 0) {
    let digit = cal % 7;
    result = digit + result;
    cal = parseInt(cal / 7);
  }

  return num > 0 ? result : '-' + result;
};
// @lc code=end
