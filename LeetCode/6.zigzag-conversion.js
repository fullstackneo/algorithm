/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let count = 0;
  let row = 0;
  let reverse = false;
  let matrix = new Array(numRows).fill('');
  if (numRows === 1 || s.length < numRows) return s;
  while (count < s.length) {
    matrix[row] += s[count++];
    reverse ? row-- : row++;
    if (row === numRows - 1 || row === 0) reverse = !reverse;
  }
  return matrix.join('');
};
// @lc code=end
