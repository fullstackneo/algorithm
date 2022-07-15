// Write a function that takes an array of integers representing the price of a stock on different days. Return the maximum profit that can be made from buying and selling a single stock

var maxProfit = function (prices) {
  // loop the Array, and get the Max num of the subArr from i
  // if Max-el>maxprofit, replace
  let maxProfit = 0;
  prices.forEach((el, index, arr) => {
    if (index === arr.length - 1) return;

    const maxPrice = Math.max(...arr.slice(index + 1));
    if (maxPrice - el > maxProfit) {
      maxProfit = maxPrice - el;
    }
  });

  return maxProfit;
};

console.log(maxProfit([1, 2, 3, 6, 11, 2]));
