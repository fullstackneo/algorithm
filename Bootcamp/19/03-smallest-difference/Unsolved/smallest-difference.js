// Write a function that takes in two sorted arrays and returns a pair of numbers (one from each array) with the smallest difference

var smallestDifference = function (arr1, arr2) {
  let minArr = [arr1[0], arr2[0]];
  let minDifference = Math.abs(arr1[0] - arr2[0]);
  // loop arr1, get the min of arr2-el. Math.abs; if min<minDifference, replace minDifference
  arr1.forEach(el1 => {
    const diffArr = arr2.map(el2 => Math.abs(el2 - el1));
    const diff = Math.min(...diffArr);
    if (diff < minDifference) {
      minDifference = diff;
      const index2 = diffArr.indexOf(diff);
      minArr = [el1, arr2[index2]];
    }
  });
  return minArr;
  // return minArr
};

console.log(smallestDifference([2, 4, 6, 8, 15, 20], [8, 9, 10, 11, 12, 13]));
