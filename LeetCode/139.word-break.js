/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
        let memo = new Map();

        const process = (str, index) => {
          if (memo.has(s.slice(index))) {
            return memo.get(str);
          }

          let result = false;

          if (index === s.length) return true;

          for (let i = 0; i < wordDict.length; i++) {
            if (str.startsWith(wordDict[i])) {
              result =
                result ||
                process(
                  str.slice(wordDict[i].length),
                  index + wordDict[i].length
                );
              memo.set(s.slice(index + wordDict[i].length), result);
            }
          }

          return result;
        };

        return process(s, 0);
};
// @lc code=end

