/*
 * @lc app=leetcode id=1260 lang=javascript
 *
 * [1260] Shift 2D Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
     let total = grid.length * grid[0].length;
     let times = k % total;
     if (times === 0) return grid;

     // let oneDArr=grid.reduce((pre,cur)=>[...pre,...cur],[]);
     // 2D => 1D
     let oneDArr = grid.flat();

     // 元素从后往前移动times次
     while (times--) {
       oneDArr.unshift(oneDArr.pop());
     }
     // 直接切割
     // let shifted=oneDArr.slice(-times).concat(oneDArr.slice(0,total-times));

     let result = [];

     //
     while (oneDArr.length > 0) {
       result.push(oneDArr.splice(0, grid[0].length));
     }
     return result;
};
// @lc code=end

