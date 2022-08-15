/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (target > matrix.at(-1).at(-1) || target < matrix[0][0]) return false;

  let m = 0;
  let n = matrix.length - 1;
  let mid;
  while (m <= n) {
    mid = Math.floor((m + n) / 2);
    if (target > matrix[mid].at(-1)) {
      m = mid + 1;
    } else if (target < matrix[mid][0]) {
      n = mid - 1;
    } else {
      break;
    }
  }

  if (target < matrix[mid][0]) return false;

  m = 0;
  n = matrix[mid].length - 1;

  while (m <= n) {
    let pivot = Math.floor((m + n) / 2);
    if (target > matrix[mid][pivot]) {
      m = pivot + 1;
    } else if (target < matrix[mid][pivot]) {
      n = pivot - 1;
    } else {
      return true;
    }
  }
  return false;
};
// @lc code=end
