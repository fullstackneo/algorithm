// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function (str) {
  // change to array and map into new arr, conbine the arr
  return str
    .split(' ')
    .map((el, index) => {
      if (index === 0) {
        return el;
      }
      return el.charAt(0).toUpperCase() + el.slice(1);
    })
    .join('');
};

console.log(camelCase('hello how are you'));
