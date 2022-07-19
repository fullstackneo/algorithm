/*
 * @lc app=leetcode id=401 lang=javascript
 *
 * [401] Binary Watch
 */

// @lc code=start
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  // 暴力枚举
  //   let ans = [];
  //   for (let i = 0; i < 12; i++) {
  //     for (let j = 0; j < 60; j++) {
  //       if (
  //         i.toString(2).replaceAll('0', '').length +
  //           j.toString(2).replaceAll('0', '').length ===
  //         turnedOn
  //       ) {
  //         ans.push(i + ':' + (j < 10 ? '0' + j : j));
  //       }
  //     }
  //   }
  //   return ans;

  const hObj = {};
  const mObj = {};
  // 如果算上AM PM
  //   const ampm = [' :AM', ' :PM'];
  const ans = [];
  for (let i = 0; i < 12; i++) {
    const length = i.toString(2).replaceAll('0', '').length;
    if (!hObj[length]) {
      hObj[length] = [];
    }
    hObj[length].push(i.toString());
  }

  for (let i = 0; i < 60; i++) {
    const length = i.toString(2).replaceAll('0', '').length;
    if (!mObj[length]) {
      mObj[length] = [];
    }
    mObj[length].push(i.toString().padStart(2, 0));
  }

  for (let i = 0; i < Object.keys(hObj).length + 1; i++) {
      for (let j = 0; j < Object.keys(mObj).length + 1; j++) {
        // 如果算上AM PM
        //i + j +1=== turnedOn
        if (i + j === turnedOn) {
          hObj[i]?.forEach(h => {
            mObj[j]?.forEach(m => {
              ans.push(h + ':' + m);
              // 如果算上AM PM
              // ans.push(h + ':' + m + ampm[0], h + ':' + m + ampm[1]);
            });
          });
        }
      }
  }

  return ans;
};
readBinaryWatch();
// @lc code=end
