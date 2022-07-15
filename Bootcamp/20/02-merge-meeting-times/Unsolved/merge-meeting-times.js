// Write a function that takes in a 2D array of meeting times, where each sub array contains 2 integers representing a meeting start and end time. Return a new 2D array such that overlapping meeting blocks are condensed into combined meeting blocks

var mergeMeetingTimes = function (arr) {
  // sort [[1,2], [4,5],[4,7]]
  const sortedArr = arr.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  const newArr = [];
  sortedArr.forEach((sonArr, index) => {
    if (index === 0) return newArr.push(sonArr);
    if (sonArr[0] > newArr[newArr.length - 1][1]) {
      newArr.push(sonArr);
    } else if (sonArr[0] === newArr[newArr.length - 1][1]) {
      newArr[newArr.length - 1][1] = sonArr[1];
    } else if (sonArr[0] < newArr[newArr.length - 1][1]) {
      newArr[newArr.length - 1][1] = Math.max(
        sonArr[1],
        newArr[newArr.length - 1][1]
      );
    }
  });
  return newArr;

  // updatedArr  , update=(arr)=>{
  // [4,5]   [6,7]
  // if arr[0]>updatedArr[updateArr.length-1][1], push
  // [1,5]   [5,6]
  // if arr[0]==updatedArr[updateArr.length-1][1], conbine
  // [1,5] [4,6] or [1,5] [3,5]
  // if arr[0]==updatedArr[updateArr.length-1][1] conbine
};


console.log(
  mergeMeetingTimes([
    [5, 8],
    [1, 4],
    [6, 8],
  ])
);


console.log(
  mergeMeetingTimes([
    [1, 3],
    [2, 4],
  ])
);