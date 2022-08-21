/*
 * @lc app=leetcode id=134 lang=javascript
 *
 * [134] Gas Station
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let total = 0;
  let accumulate = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    total = total + gas[i] - cost[i];
    accumulate = accumulate + gas[i] - cost[i];
    if (accumulate < 0) {
      start = i + 1;
      accumulate = 0;
    }
  }
  return total < 0 ? -1 : start;
};
// @lc code=end
