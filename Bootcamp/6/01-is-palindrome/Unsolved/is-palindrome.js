// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function (str) {
  return str === str.split('').reverse().join('');
};

console.log(isPalindrome('12321'));
