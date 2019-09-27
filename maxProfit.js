const maxProfit = function(array) {
  let buyPrice = array[0];
  let sellPrice = 0;
  let profit = 0;

  for (let i = 0; i < array.length; i++) {
    if (sellPrice < buyPrice) {
      buyPrice = array[i];
    }
    sellPrice = array[i + 1];
    if ((sellPrice - buyPrice) > profit) {
      profit = sellPrice - buyPrice;
    }
  }
  
  if (profit <= 0) {
    return -1;
  } else {
    return profit;
  }
}

const stockPricePerDay = [45, 24, 35, 31, 40, 38, 11];
console.log(maxProfit(stockPricePerDay));

const test = [10, 7, 5, 8, 11, 9, 1];
console.log(maxProfit(test));

const test2 = [10, 8, 6, 4, 1];
console.log(maxProfit(test2)); // returns -1

const test3 = [1, 2, 3, 4, 5];
console.log(maxProfit(test3)); // returns 4