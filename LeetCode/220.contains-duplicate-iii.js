/*
 * @lc app=leetcode id=220 lang=javascript
 *
 * [220] Contains Duplicate III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  // bucket sort TC(n)
  const buckets = new Map();
  const w = t + 1;
  for (let i = 0; i < nums.length; i++) {
    const bucketKey = Math.floor(nums[i] / w);
    if (buckets.has(bucketKey)) return true;
    if (buckets.has(bucketKey - 1) && nums[i] - buckets.get(bucketKey - 1) <= t)
      return true;
    if (buckets.has(bucketKey + 1) && buckets.get(bucketKey + 1) - nums[i] <= t)
      return true;
    buckets.set(bucketKey, nums[i]);

    if (i >= k) buckets.delete(Math.floor(nums[i - k] / w));
  }
  return false;

  // 先排序 再循环
  if (k === 0) return false;

  if (t === 0) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i]) && i - map.get(nums[i]) <= k) return true;
      map.set(nums[i], i);
    }
    return false;
  }

  let sortArr = nums.map((el, i) => [el, i]).sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < sortArr.length; j++) {
      if (sortArr[j][0] - sortArr[i][0] <= t) {
        if (Math.abs(sortArr[j][1] - sortArr[i][1]) <= k) return true;
      } else {
        break;
      }
    }
  }

  return false;
};
// @lc code=end
