// Write a function that takes in an array of sorted strings and returns the index of its rotation point if it has one, else return -1

var rotationPoint = function (words) {
  // if last > first, return -1
  if (words[words.length - 1] > words[0]) {
    return -1;
    // if last <= first,
  } else {
    return words.findIndex((el, index) => {
      if (index === 0) return;
      return words[index - 1] > el;
    });
  }
};

console.log(rotationPoint(['cool', 'cat']));
