/*
 * @lc app=leetcode id=598 lang=javascript
 *
 * [598] Range Addition II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */

var maxCount = function (m, n, ops) {
  // loop ops, each (x,y), get the min of column*(x-1)+(y-1)

  if (!ops.length) return m * n;

  let minX = ops[0][0];
  let minY = ops[0][1];
  ops.forEach(([x, y]) => {
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
  });

  return minX * minY;
};
// @lc code=end
