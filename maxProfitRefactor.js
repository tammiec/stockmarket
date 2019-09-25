const maxProfit = function(array) {
  const midIndex = Math.ceil(array.length / 2);
  const buy = array.slice(0, midIndex).sort((a, b) => a - b);
  const sell = array.slice(midIndex, array.length).sort((a, b) => b - a);
  const splitArray = [buy];
  splitArray.push(sell);
  let profitArray = [];
  let currProfit = sell[0] - buy[0];
  splitArray.forEach(item => {
    if (item.length > 1) {
      profitArray.push(currProfit);
      maxProfit(item);
    } else {
      profitArray.push(currProfit);
    }
  });
  const max = profitArray.sort((a, b) => b - a)[0];
  if (max >= 0) {
    return max;
  } else {
    return -1;
  }
};

const stockPricePerDay = [45, 24, 35, 31, 40, 38, 11];
console.log(maxProfit(stockPricePerDay));

const test = [10, 7, 5, 8, 11, 9, 1];
console.log(maxProfit(test));

const test2 = [10, 7, 9, 8, 5, 4, 1];
console.log(maxProfit(test2));