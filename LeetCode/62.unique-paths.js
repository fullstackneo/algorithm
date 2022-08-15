/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // iterative method
  // const dp = Array(m).fill().map(el=>Array(n).fill(1));
  // for (let i=1;i<=m-1;i++) {
  //     for (let j=1;j<=n-1;j++) {
  //         dp[i][j] = dp[i-1][j] + dp[i][j-1];
  //     }
  // }
  // return dp[m-1][n-1];
    
  // recursive method
  // let dp = new Array(m+1).fill(1).map(x => new Array(n+1).fill(0));
  // var recur = function(r, c) {
  //     if (r == m && c == n) return 1;
  //     if (r > m || c > n) return 0;
  //     if (dp[r][c]) return dp[r][c];
  //     dp[r][c] = recur(r+1, c) + recur(r, c+1);
  //     return dp[r][c];
  // }
  // return recur(1,1);
    
    
  // dp method
  // let dp = Array(m).fill().map(el=>Array(n));
  // for (let i=m-1;i>=0;i--) {
  //     if(i===m-1){dp[i].fill(1);continue;}
  //     for (let j=n-1;j>=0;j--) {
  //         if(j===n-1){
  //             dp[i][j]=1;
  //             continue;
  //         }
  //         dp[i][j] = dp[i+1][j] + dp[i][j+1];
  //     }
  // }
  // return dp[0][0];
};
// @lc code=end
