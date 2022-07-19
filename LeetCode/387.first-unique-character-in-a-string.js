/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // 减去唯一的数，length少1
  const set = new Set(s.split(''));
  for (let letter of set) {
    if (s.length - s.replaceAll(letter, '').length === 1) {
      return s.indexOf(letter);
    }
  }
  return -1;

  // 正反找唯一的数
  //     for(let letter of s){
  //         if(s.indexOf(letter)===s.lastIndexOf(letter)){
  //             return s.indexOf(letter)
  //         }
  //     }
  //     return -1

  // 统计数量，再遍历一次
  //     const obj={}
  //     for(let letter of s){
  //         obj[letter]?obj[letter]++:obj[letter]=1;
  //     }
  //     return s.split('').findIndex(el=>{
  //         if(obj[el]===1)return true
  //     })
};
// @lc code=end
