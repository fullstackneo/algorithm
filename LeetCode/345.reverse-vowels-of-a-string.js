/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {

  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

  let m = 0;
  let n = s.length - 1;
  s = s.split('');

  while (m < n) {
    if (vowels.includes(s[m]) && vowels.includes(s[n])) {
      [s[m], s[n]] = [s[n], s[m]];
      m++;
      n--;
    }

    if (!vowels.includes(s[m])) {
      m++;
    }

    if (!vowels.includes(s[n])) {
      n--;
    }
  }

  return s.join('');
};
// @lc code=end
