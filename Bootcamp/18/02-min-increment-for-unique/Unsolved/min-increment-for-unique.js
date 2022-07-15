// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

const minIncrement = function (arr) {
  let count = 0;
  // loop arr, put el into obj, if obj[el] exist, el++, count++
  const obj = {};
  arr.forEach(el => {
    while (obj[el]) {
      el++;
      count++;
    }
    obj[el] = true;
  });
  return count;
};

console.log(minIncrement([1, 2, 2]));
