// Write a function that takes in a string and and an offset and returns a new string with each character moved by the offset

var caesarCipher = function (str, offset) {
  let realOffset = offset % 26;
  let newStr = '';
  str.split('').forEach(el => {
    //   get charCode and change to new charCode
    let charCode = el.charCodeAt(0) + realOffset;
    //update charCode
    if (charCode < 97) {
      charCode = 123 + realOffset;
    } else if (charCode > 122) {
      charCode = 96 + realOffset;
    }
    //   add new char to newStr
    newStr += String.fromCharCode(charCode);
  });
  return newStr;
};

console.log(caesarCipher('abc', 1));
