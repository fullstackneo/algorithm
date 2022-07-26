/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  //   const getFinal = s => {
  //     let resultS = '';
  //     let indexS = s.length - 1;
  //     let countS = 0;
  //     while (indexS >= 0) {
  //       if (s[indexS] === '#') {
  //         countS++;
  //         if (countS >= indexS) return resultS;
  //       } else {
  //         if (countS > 0) {
  //           countS--;
  //         } else {
  //           resultS = s[indexS] + resultS;
  //         }
  //       }
  //       indexS--;
  //     }
  //     return resultS;
  //   };
    
    
  // stack方法 从左向右
  let stack = [];
  for (let char of s) {
    char === '#' ? stack.pop() : stack.push(char);
  }
  return stack.join('');
  return getFinal(s) === getFinal(t);
};
// @lc code=end
