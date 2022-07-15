// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one
// There is no need to return from this function

const leftRotation = (arr, positions) => {
  // find the subArr and remove it
  const subArr = arr.splice(positions, arr.length - 1);

  // insert the subArr to the left
  arr.splice(0, 0, ...subArr);
};

const arr = [1, 2, 3, 4, 5];
leftRotation(arr, 2);
