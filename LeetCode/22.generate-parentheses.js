/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  const go = (s = '', l = 0, r = 0) => {
    if (s.length === 2 * n) {
      res.push(s);
      return;
    }
    if (l < n) go(s + '(', l + 1, r);
    if (r < l) go(s + ')', l, r + 1);
  };
  go();
  return res;
};
// @lc code=end
