const oneEditAway = function (str1, str2) {
  // TODO: Write function that takes in two strings and returns true if one character away, otherwise false
  //set count =0

  let count = 0;
  // loop the longer length array
  const max_length = Math.max(str1.length, str2.length);
  const longArr = (max_length === str1.length ? str1 : str2).split('');
  const shortArr = (max_length === str1.length ? str2 : str1).split('');
  //if find difference, count++, if count===2, return false
  longArr.forEach((el, i) => {
    el !== shortArr[i] && count++;
  });

  return count !== 1 ? false : true;
};
console.log(oneEditAway('hello', 'helxo'));
console.log(oneEditAway('hello', 'hello'));
console.log(oneEditAway('hello', 'hexxo'));
console.log(oneEditAway('hello', 'hellow'));
