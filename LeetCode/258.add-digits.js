/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  // change to string,
  let str = num.toString();
  // loop: add all number(reduce)
  while (str.length !== 1) {
    str =
      str
        .split('')
        .map(Number)
        .reduce((pre, cur) => pre + cur, 0) + '';
  }
  return parseInt(str);
};
// @lc code=end
