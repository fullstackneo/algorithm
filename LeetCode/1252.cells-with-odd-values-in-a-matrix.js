/*
 * @lc app=leetcode id=1252 lang=javascript
 *
 * [1252] Cells with Odd Values in a Matrix
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  let objM = {};
  let objN = {};
  indices.forEach(el => {
    objM[el[0]] = objM[el[0]] + 1 || 1;
    objN[el[1]] = objN[el[1]] + 1 || 1;
  });
  let total = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (objM[i] || objN[j]) {
        let x = objM[i] ? objM[i] : 0;
        let y = objN[j] ? objN[j] : 0;
        if ((x + y) % 2 !== 0) {
          total++;
        }
      }
    }
  }
  return total;
};
// @lc code=end
