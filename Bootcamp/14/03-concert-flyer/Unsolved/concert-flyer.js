// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

var concertFlyer = function (magazine, flyer) {
  // change M str to obj { e1:1, e2:2...}
  const obj = Object.fromEntries(magazine.split(' ').map(el => [el, true]));

  // change flyer to Array, loop. if !obj[el], return false
  return !flyer.split(' ').some(el => !obj[el]);
};

console.log(concertFlyer('hello ni hao', 'hello'));
