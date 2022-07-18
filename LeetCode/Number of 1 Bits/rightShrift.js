var hammingWeight = function (n) {
  let total = 0;
  while (n != 0) {
    total++;
    n = n & (n - 1);
  }

  return total;
};
