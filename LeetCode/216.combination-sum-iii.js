/*
 * @lc app=leetcode id=216 lang=javascript
 *
 * [216] Combination Sum III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let result = [];

  const process = (arr, cur, sum) => {
    if (arr.length > k || sum > n) return;
    if (arr.length === k && sum === n) return result.push(arr);
    for (let i = cur + 1; i <= 9; i++) {
      process([...arr, i], i, sum + i);
    }
  };

  process([], 0, 0);
  return result;
};
// @lc code=end
