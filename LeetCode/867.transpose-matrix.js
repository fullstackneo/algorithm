/*
 * @lc app=leetcode id=867 lang=javascript
 *
 * [867] Transpose Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  //     let result=[];
  //     for(let i=0;i<matrix.length;i++){
  //         let newColumn=[]
  //         for(let j=0;j<matrix[0].length;j++){
  //             newColumn.push(matrix[i][j])
  //         }
  //         result.push(newColumn)
  //     }

  //     return result

  return matrix[0].map((el, i) => matrix.map(el => el[i]));
};
// @lc code=end
