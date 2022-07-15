// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false

const validBrackets = function (str) {
  const obj = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const arr = [];
  str.split('').forEach(el => {
    if (el === ' ') return;
    if (obj[arr[arr.length - 1]] === el) {
      return arr.pop();
    }

    arr.push(el);
  });
  return arr.length === 0;
};

console.log(validBrackets('[ ] '));
