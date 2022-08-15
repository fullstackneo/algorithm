/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
        if (s[0] === '0') return 0;
        if (+s[0] > 2 && s[1] === '0') return 0;

        let dp = new Array(s.length).fill(0);
        dp[0] = 1;

        for (let i = 1; i <= s.length - 1; i++) {
          let a = +s[i];
          if (a >= 1 && a <= 9) dp[i] = dp[i - 1];

          let b = +(s[i - 1] + s[i]);

          if (b <= 26 && b >= 10) {
            if (i === 1) {
              dp[i]++;
            } else {
              dp[i] += dp[i - 2];
            }
          }
        }
        return dp.at(-1);
};
// @lc code=end

