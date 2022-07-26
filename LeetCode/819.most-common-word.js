/*
 * @lc app=leetcode id=819 lang=javascript
 *
 * [819] Most Common Word
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
        let ans = {};
        let maxKey;
        let maxCount = 1;

        paragraph.split(/[!?',;. ]/).forEach((el, i, arr) => {
          if (el === '') return;
          el = el.toLowerCase();

          if (banned.includes(el)) return;

          if (!ans[el]) {
            if (!maxKey) {
              maxKey = el;
            }
            ans[el] = 1;
          } else {
            ans[el]++;
            if (ans[el] > maxCount) {
              maxKey = el;
              maxCount++;
            }
          }
        });

        return maxKey;
};
// @lc code=end

