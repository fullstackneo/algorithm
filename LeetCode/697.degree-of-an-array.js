/*
 * @lc app=leetcode id=697 lang=javascript
 *
 * [697] Degree of an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let obj = {};

  nums.forEach((el, index) => {
    if (!obj[el]) {
      obj[el] = [index, index, 1];
    } else {
      obj[el][1] = index;
      obj[el][2]++;
    }
  });

  let arrV = Object.values(obj);
  // sort the [startIndex, endIndex, degree], order rule: degree decrease && index-varience increase

  // the first el has the largest degree with the min index-varience
  let targetArr = arrV.sort((a, b) => {
    if (b[2] === a[2]) {
      return a[1] - a[0] - (b[1] - b[0]);
    }
    return b[2] - a[2];
  });

  return targetArr[0][1] - targetArr[0][0] + 1;
};
// @lc code=end
