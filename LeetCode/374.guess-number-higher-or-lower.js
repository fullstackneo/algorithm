/*
 * @lc app=leetcode id=374 lang=javascript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let start = 1;
  let end = n;
  let m;

  while (true) {
    m = parseInt((start + end) / 2);
    if (guess(m) === -1) {
      end = m - 1;
    } else if (guess(m) === 1) {
      start = m + 1;
    } else if (guess(m) === 0) {
      return m;
    }
  }
};
// @lc code=end
