/*
 * @lc app=leetcode id=896 lang=javascript
 *
 * [896] Monotonic Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  // if(nums[0]>=nums[nums.length-1]){
  //     return nums.every((el,i,arr)=>el>=arr[i+1] || i===arr.length-1)
  // }else{
  //     return nums.every((el,i,arr)=>el<=arr[i+1] || i===arr.length-1)
  // }

  let increase = true,
    decrease = true;
  nums.forEach((el, i, arr) => {
    if (el > arr[i + 1]) {
      increase = false;
    } else if (el < arr[i + 1]) {
      decrease = false;
    }
  });
  return increase || decrease;
};
// @lc code=end
