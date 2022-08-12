/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
        let result = [];
        for (let i = 0; i < intervals.length; i++) {
          // interval is lower
          if (intervals[i][1] < newInterval[0]) {
            result.push(intervals[i]);
            //interval is higher
          } else if (intervals[i][0] > newInterval[1]) {
            result.push(newInterval, ...intervals.slice(i));
            return result;
            // overlaps
          } else {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
          }
        }
        result.push(newInterval);
        return result;
};
// @lc code=end

