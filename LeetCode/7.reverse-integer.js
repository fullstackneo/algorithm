/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let negative = false;
  if (x < 0) {
    negative = true;
    x = -x;
  }
  let result = 0;
  while (x !== 0) {
    if (result > 214748364 || (result === 214748364 && x % 10 >= 8)) return 0;
    result = result * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return negative ? 0 - result : result;
};
// @lc code=end
