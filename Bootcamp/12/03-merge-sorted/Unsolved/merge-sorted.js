// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {
  // insert
  if (arr1[arr1.length - 1] < arr2[0]) {
    return [...arr1, ...arr2];
  }

  if (arr2[arr2.length - 1] <= arr1[0]) {
    return [...arr2, ...arr1];
  }

  let i = 0;
  let j = 0;
  const arr = [];

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] <= arr2[j] || j >= arr2.length) {
      arr.push(arr1[i++]);
    } else if (arr2[j] <= arr1[i] || i >= arr1.length) {
      arr.push(arr2[j++]);
    }
  }
  return arr;
};

console.log(mergeSorted([1, 9], [0, 1, 2, 7]));
