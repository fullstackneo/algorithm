// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = str => {
  const arr = str.split('');
  let newStr = '';
  for (let i = arr.length - 1; i >= 0; i--) {
    newStr += arr[i];
  }
  return newStr;
};

console.log(reverse('abc'));
