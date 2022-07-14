const multiplyInto20 = function (arr) {
  // TODO: Write Your Code Here
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] * arr[j] === 20) {
  //       return true;
  //     }
  //   }
  // }
  // return false;
  const numMap = {};
  return arr.some(el => {
    if (numMap[20 / el]) {
      return true;
    }
    numMap[el] = true;
  });
};

console.log(multiplyInto20([20, 3, 4, -1, 14, -5]));
