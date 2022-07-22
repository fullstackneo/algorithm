/*
 * @lc app=leetcode id=1266 lang=javascript
 *
 * [1266] Minimum Time Visiting All Points
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
     let result = 0;
     points.forEach((el, index, arr) => {
       if (index === 0) return;
       let max = Math.max(
         Math.abs(el[0] - arr[index - 1][0]),
         Math.abs(el[1] - arr[index - 1][1])
       );
       result += max;
     });
     return result;  
};
// @lc code=end
