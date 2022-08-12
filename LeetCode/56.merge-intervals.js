/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [];

  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] >= intervals[i + 1][1]) {
      intervals[i + 1] = intervals[i];
    } else if (intervals[i][1] >= intervals[i + 1][0]) {
      intervals[i + 1][0] = intervals[i][0];
    } else {
      result.push(intervals[i]);
    }
  }

  result.push(intervals[intervals.length - 1]);

  return result;
};
// @lc code=end
