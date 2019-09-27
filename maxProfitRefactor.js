const maxProfit = function(array) {
  
  const midIndex = Math.ceil(array.length / 2);
  const buy = array.slice(0, midIndex);
  const sell = array.slice(midIndex, array.length);
  if (array.length === 1) {
    return -1;
  } else {
    let buyMax = maxProfit(buy);
    let sellMax = maxProfit(sell);
    let crossMax = Math.max(...sell) - Math.min(...buy);
    return Math.max(buyMax, sellMax, crossMax);
  }
  
};

const stockPricePerDay = [45, 24, 35, 31, 40, 38, 11];
console.log(maxProfit(stockPricePerDay)); // returns 16

const test = [10, 7, 5, 8, 11, 9, 1];
console.log(maxProfit(test)); // returns 6

const test2 = [10, 9, 8, 5, 4, 1];
console.log(maxProfit(test2)); // returns -1

const test3 = [1, 2, 3, 4, 5];
console.log(maxProfit(test3)); // returns 4