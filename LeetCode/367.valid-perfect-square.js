/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  // loop from 1 to num/i
  //   if (num === 1) return true;
  //   for (let i = 1; i <= num / 2; i++) {
  //     if (i > num / i) break;
  //     if (i === num / i) return true;
  //   }
  //   return false;

    
    // ** 方法
    // return num **0.5%1==0



  //binary search
  if (num === 1) {
    return true;
  }

  let m = 0;
  let n = num;
  let mid;
  while (m+1!==n) {
    mid = parseInt((m + n) / 2);
    if (mid * mid > num) {
      n = mid;
    } else if (mid * mid < num) {
      m = mid;
    } else {
      return true;
    }
  }

  return false;
};
// @lc code=end
