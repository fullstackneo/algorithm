/*
 * @lc app=leetcode id=520 lang=javascript
 *
 * [520] Detect Capital
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  // return /^([A-Z]+|[a-z]+|([A-Z][a-z]+))$/.test(word)
  // return (word.charCodeAt(0)<=90 && word.slice(1).toLowerCase()===word.slice(1))|| word.toLowerCase()===word || word.toUpperCase()===word
    
  return (
    word === word[0] + word.slice(1).toLowerCase() ||
    word.toUpperCase() === word
  );
};
// @lc code=end

