/*
 * @lc app=leetcode id=459 lang=javascript
 *
 * [459] Repeated Substring Pattern
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  //1. Regex method
  // return /^([a-z]+)\1{1,}$/.test(s)
    
    // 2. loop slice and repeat
  // for(let i=1;i<=s.length/2;i++){
  //     const times=s.length/i;
  //     if(s.substr(0,i).repeat(times)===s)return true
  // }
  // return false
    
    
    // genius method
  // return s.repeat(2).slice(1,-1).includes(s)
};
// @lc code=end
