/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let m = 0;
  let n = 0;
  let count = 0;
  while (m < g.length && n < s.length) {
    if (s[n] >= g[m]) {
      count++;
      m++;
      n++;
    } else {
      n++;
    }
  }
  return count;
};
// @lc code=end
