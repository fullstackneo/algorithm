/*
 * @lc app=leetcode id=696 lang=javascript
 *
 * [696] Count Binary Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
        let pre = 0;
        let cur = 0;
        let total = 0;
        let count = 0;
        for (let i = 0; i < s.length; i++) {
          count++;
          if (s[i + 1] !== s[i]) {
            cur = count;
            total += Math.min(pre, cur);
            count = 0;
            pre = cur;
          }
        }
        return total; 
};
// @lc code=end

