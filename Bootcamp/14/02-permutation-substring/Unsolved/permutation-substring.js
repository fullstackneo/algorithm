// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function (str, sub) {
  // change str to obj {e1:true, e2:true }
  const obj = {};
  str.split('').forEach(el => {
    if (!obj[el]) {
      return (obj[el] = 1);
    }
    obj[el]++;
  });
  // loop the sub, if obj[char] is undefined or obj[char]===0, obj[char]--, return
  return !sub.split('').some(el => !obj[el] || !obj[el]--);
};

console.log(permutationSubstring('hello how are you', 'helhowl'));
