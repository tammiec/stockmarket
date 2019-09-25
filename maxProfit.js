const maxProfit = function(array) {
  let buyPrice = 0;
  let sellPrice = 0;
  let currProfit = 0;
  let maxProfit = 0;
  let changeBuyPrice = true;
  for (let i = 0; i < array.length; i++) {
    if (changeBuyPrice) {
      buyPrice = array[i];
    }
    sellPrice = array[i + 1];
    currProfit = sellPrice - buyPrice;
    if (currProfit > maxProfit) {
      maxProfit = currProfit;
    }
    if (sellPrice > buyPrice) {
      changeBuyPrice = false;
    }
  }
  return maxProfit;
}

const stockPricePerDay = [45, 24, 35, 31, 40, 38, 11];
console.log(maxProfit(stockPricePerDay));

const test = [10, 7, 5, 8, 11, 9, 1];
console.log(maxProfit(test));