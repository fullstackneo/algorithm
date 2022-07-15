// Write code to return a new array with all of the characters in `array` reversed.
// You may NOT use the built-in reverse method

// const reverseInPlace = arr => {
//   // loop the arr from length-1 to 0, add to new arr
//   const newArr = [];
//   arr.forEach((el, index) => newArr.push(arr[arr.length - 1 - index]));
//   return newArr;
// };

// console.log(reverseInPlace([1, 2, 3]));

const reverseInPlace = arr => {
  // loop the arr

  // push the first el, delete the first
  for (let i = arr.length - 2; i >= 0; i--) {
    arr.push(arr[i]);
    arr.splice(i, 1);
  }
  return arr;
};

console.log(reverseInPlace([1, 2, 3, 4]));
