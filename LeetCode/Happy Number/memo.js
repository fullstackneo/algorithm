var isHappy = function (n, memo = {}) {
  let total = 0;
  n.toString()
    .split('')
    .forEach(el => {
      total += parseInt(el) * parseInt(el);
    });
  if (total === 1) {
    return true;
  }

  if (!memo[total]) {
    memo[total] = true;
    return isHappy(total);
  } else {
    return false;
  }
};


console.log(isHappy(2));