/*
 * @lc app=leetcode id=495 lang=javascript
 *
 * [495] Teemo Attacking
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let total = 0;
  timeSeries.forEach((el, index, arr) => {
    if (index === arr.length - 1) {
      return (total += duration);
    }
    total += Math.min(timeSeries[index + 1] - timeSeries[index], duration);
  });
  return total;
};
// @lc code=end
