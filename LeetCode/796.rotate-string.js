/*
 * @lc app=leetcode id=796 lang=javascript
 *
 * [796] Rotate String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  // one liner
  // return (goal+goal).slice(1,goal.length*2-1).replace(s,'').length!==(goal.length*2-2)

  // loop method
  for (let letter of goal) {
    if (goal === s) return true;
    s = s.slice(1) + s[0];
  }
  return false;
};
// @lc code=end
