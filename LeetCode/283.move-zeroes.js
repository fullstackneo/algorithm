/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // 双指针，移动替换
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (nums[i] === 0 && nums[j] === 0) {
        continue;
      }

      [nums[i], nums[j]] = [nums[j], [nums[i]]];
      j++;
    }
  }
  // loop from 0, find 0, splice and add 0 to right
  // let m=0;
  //   let n=nums.length-1;
  //   while(m!==n){
  //       if(nums[m]===0){
  //       nums.splice(m,1);
  //       nums[nums.length]=0;
  //       n--
  //   }else{
  //       m++
  //   }
  //   }
};
// @lc code=end

