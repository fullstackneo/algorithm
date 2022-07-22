/*
 * @lc app=leetcode id=566 lang=javascript
 *
 * [566] Reshape the Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  let flat = mat.flat();
  if (flat.length !== r * c) return mat;

  let result = [];
  while (flat.length) {
    result.push(flat.splice(0, c));
  }

  return result;
};
// @lc code=end
