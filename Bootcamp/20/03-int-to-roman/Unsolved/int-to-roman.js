// Write a function that takes in an integer and returns it as a Roman numeral string

var intToRoman = function (num) {
  let str = '';
  let cal = num;
  // map 1-9 into an object
  const obj = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
  };
  // get the integer result and remainder by divider 1000 - M

  str += 'M'.repeat(parseInt(cal / 1000));
  cal = cal % 1000;
  // get the integer result and remainder by divider 100 - C
  str += 'C'.repeat(parseInt(cal / 100));
  cal = cal % 100;
  // get the integer result and remainder by divider 10 -X
  str += 'X'.repeat(parseInt(cal / 10));
  cal = cal % 10;

  str += obj[cal];
  return str;
};

console.log(intToRoman(2024));
console.log(intToRoman(9));
console.log(intToRoman(5));
