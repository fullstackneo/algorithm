// Write a function that takes in a Roman Numeral string and returns its integer form

var romanToInt = function (str) {
  // set map for 1-9 ,total=0
  let total = 0;
  const numMap = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    VI: 6,
    VII: 7,
    VIII: 8,
    IX: 9,
    X: 10,
    C: 100,
    M: 1000,
  };

  // loop the arr, M, C, X, add to total
  str.split('').some((el, index, arr) => {
    if (['I', 'V'].includes(el)) {
      total += numMap[arr.slice(index).join('')];
      return true;
    }
    total += numMap[el];
  });
  // add the remaing to total
  return total;
};

console.log(romanToInt('V'));
