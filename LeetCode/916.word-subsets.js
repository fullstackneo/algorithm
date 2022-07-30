/*
 * @lc app=leetcode id=916 lang=javascript
 *
 * [916] Word Subsets
 */

// @lc code=start
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  let frequency = new Array(26).fill(0);

  words2.forEach(word => {
    let temp = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
      temp[word.charCodeAt(i) - 97]++;
    }
    frequency.forEach((count, i, arr) => {
      if (temp[i] !== 0) {
        arr[i] = Math.max(count, temp[i]);
      }
    });
  });

  // loop each word in words1
  return words1.filter(word => {
    let temp = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
      temp[word.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < frequency.length; i++) {
      if (frequency[i] > temp[i]) return false;
    }
    return true;
  });
};
// @lc code=end
