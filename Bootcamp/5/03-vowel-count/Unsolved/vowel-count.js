// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
  // put each char into obj, start value =1 or value ++ if exist
  const obj = {};
  str.split('').forEach(el => {
    if (!obj[el]) {
      obj[el] = 1;
      return;
    }
    obj[el]++;
  });
  return obj;
};

console.log(vowelCount('aeio8932131fjoi'));
