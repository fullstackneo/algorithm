/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  // loop
  //     if(n<=0) return false;
  //     while(Number.isInteger(n)){
  //         n=n/3;
  //     }
  //   return 3*n===1
    
    // check if num meet the format 10000.. 
  const num=n.toString(3);
  return num==='1'.padEnd(num.length,0);
};
// @lc code=end

