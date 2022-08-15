/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
        if (arr[0][0] === 1 || arr.at(-1).at(-1) === 1) return 0;

        arr[0][0] = 1;

        // fill the 0 row
        for (let j = 1; j < arr[0].length; j++) {
          if (arr[0][j] === 1) {
            arr[0].fill(0, j);
            break;
          } else {
            arr[0][j] = arr[0][j - 1];
          }
        }

        // fill the 0 column
        for (let i = 1; i < arr.length; i++) {
          if (arr[i][0] === 1) {
            while (i < arr.length) {
              arr[i][0] = 0;
              i++;
            }
          } else {
            arr[i][0] = arr[i - 1][0];
          }
        }

        // fill all left
        for (let i = 1; i < arr.length; i++) {
          for (let j = 1; j < arr[0].length; j++) {
            if (arr[i][j] === 1) {
              arr[i][j] = 0;
              continue;
            }
            arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
          }
        }

        return arr.at(-1).at(-1);
};
// @lc code=end

