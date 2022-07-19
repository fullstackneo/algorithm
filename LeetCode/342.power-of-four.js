/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    
    // Math.log2(2n)
  return n>0 && Math.log2(n)%2===0;

    // 10000.. 
//   return n > 0 && /^10*$/.test(n.toString(4));
};
// @lc code=end

