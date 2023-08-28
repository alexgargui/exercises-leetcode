/**
 * Problem: Best time to buy and sell stock
 * Link to problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock
 * Coder: alexgargui
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let buy = 0;
  let sell = 1;
  let maxProfit = 0;
  while (sell < prices.length) {
      if (prices[sell] > prices[buy]) {
          let profit = prices[sell] - prices[buy];
          maxProfit = Math.max(maxProfit, profit);
      } else {
          buy = sell;
      }
      sell++;
  }
  return maxProfit;
};