/*
 * @lc app=leetcode id=405 lang=javascript
 *
 * [405] Convert a Number to Hexadecimal
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  if (num === 0) return '0';
  let result = '';

  let cal = num < 0 ? 2 ** 32 + num : num;

  const char = '0123456789abcdef';

  while (cal > 0) {
    let remainder = cal % 16;
    result = char[remainder] + result;
    cal = parseInt(cal / 16);
  }

  return result;
};
// @lc code=end
