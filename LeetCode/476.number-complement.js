/*
 * @lc app=leetcode id=476 lang=javascript
 *
 * [476] Number Complement
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  // return parseInt(num.toString(2).split('').map(el=>el==='0'?'1':'0').join(''),2)

  // 模-1=数+反码数
  let d = 2;
  while (d <= num) {
    d = d * 2;
  }
  return d - 1 - num;
};
// @lc code=end
