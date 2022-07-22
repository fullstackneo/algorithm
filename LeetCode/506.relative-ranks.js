/*
 * @lc app=leetcode id=506 lang=javascript
 *
 * [506] Relative Ranks
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let obj = {};
  [...score]
    .sort((a, b) => b - a)
    .forEach((el, index) => {
      switch (index) {
        case 0:
          obj[el] = 'Gold Medal';
          break;
        case 1:
          obj[el] = 'Silver Medal';
          break;
        case 2:
          obj[el] = 'Bronze Medal';
          break;
        default:
          obj[el] = index + 1 + '';
          break;
      }
    });

  return score.map(el => obj[el]);
};
// @lc code=end
