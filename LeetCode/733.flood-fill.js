/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  if (
    sr < 0 ||
    sr >= image.length ||
    sc < 0 ||
    sc >= image[0].length ||
    image[sr][sc] !== origin
  )
    return;
  image[sr][sc] = color;
  fill(image, sr - 1, sc, color, origin);
  fill(image, sr + 1, sc, color, origin);
  fill(image, sr, sc - 1, color, origin);
  fill(image, sr, sc + 1, color, origin);
};

var floodFill = function (image, sr, sc, color) {
  if (image[sr][sc] === color) return image;
  let origin = image[sr][sc];
  fill(image, sr, sc, color, origin);
  return image;
};
// @lc code=end
