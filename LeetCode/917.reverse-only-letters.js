/*
 * @lc app=leetcode id=917 lang=javascript
 *
 * [917] Reverse Only Letters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  let m = 0;
  let n = s.length - 1;
  s = s.split('');
  while (m < n) {
    if (!/[a-z]/.test(s[m])) m++;
    if (!/[a-z]/.test(s[n])) n--;
    if (/[a-z]/g.test(s[m]) && /[A-Za-z]/.test(s[n])) {
      [s[m], s[n]] = [s[n], s[m]];
      m++;
      n--;
    }
  }
  return s.join('');
};
// @lc code=end
