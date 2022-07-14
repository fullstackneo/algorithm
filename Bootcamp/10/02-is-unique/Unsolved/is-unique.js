// TODO: Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function (arr) {
  return arr.length === new Set(arr).size;
};

console.log(isUnique([1, 2, 3, 1]));
