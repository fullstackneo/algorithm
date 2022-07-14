// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function (str) {
  // =>arr and change first el to upperCase
  return str
    .split(' ')
    .map(el => el.charAt(0).toUpperCase() + el.slice(1))
    .join(' ');
};
console.log(titleCase('hello how are you'));
