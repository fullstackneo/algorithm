// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function (str) {
  const obj = {};
  str.split('').forEach(el => {
    if (!obj[el]) {
      return (obj[el] = 1);
    }
    obj[el]++;
  });
  return obj;
};

console.log(characterCount('1122ereew'));
