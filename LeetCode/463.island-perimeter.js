/*
 * @lc app=leetcode id=463 lang=javascript
 *
 * [463] Island Perimeter
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  // 暴力 双循环
  let row = grid.length;
  let column = grid[0].length;

  let sum = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (!grid[i][j]) {
        continue;
      }
      sum += 4;
      if (i <= row - 2 && grid[i][j] && grid[i + 1][j]) {
        sum -= 2;
      }

      if (j <= column - 2 && grid[i][j] && grid[i][j + 1]) {
        sum -= 2;
      }
    }
  }

  return sum;

  // 利用 & 和BigInt
  //     let sum=0;

  //     for(let i=0; i<grid.length;i++){
  //         let arr1='0b'+grid[i].join('');
  //         let line1 = BigInt(arr1);
  //         arr1=arr1+'0';
  //         let line3 = BigInt(arr1);
  //         sum+=(arr1.match(/1/g)?.length||0)*4;
    
  //         if(i<grid.length-1){
  //             let arr2='0b'+grid[i+1].join('');
  //             let line2=BigInt(arr2);
  //             sum-=(( line1 & line2).toString(2).match(/1/g)?.length ||0)*2;
  //         }

  //         sum-= (( line1 & line3).toString(2).match(/1/g)?.length ||0)*2;

  //     }

  //     return sum
};
// @lc code=end

