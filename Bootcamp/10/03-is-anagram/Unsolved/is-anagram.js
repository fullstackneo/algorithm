// TODO: Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function (strA, strB) {
  const arrA = strA.split('');
  const arrB = strB.split('');
  if (arrA.length !== arrB.length) {
    return false;
  }

  return arrA.sort().join('') === arrB.sort().join('');
};

console.log(isAnagram('car', 'rac'));
