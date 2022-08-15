/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i === 0 && j === 0) continue;

      if (i === 0) {
        grid[0][j] += grid[0][j - 1];
        continue;
      }

      if (j === 0) {
        grid[i][0] += grid[i - 1][0];
        continue;
      }
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }
  return grid.at(-1).at(-1);
};
// @lc code=end
