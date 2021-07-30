/**
 * Problem: Final prices with a special discount in a shop
 * Link to problem: https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop
 * Type structure: Monotonic Stack
 * Coder: alexgargui
 * @param {number[]} prices
 * @return {number[]}
 */
const finalPrices = (prices) => {
  let results = [];
  let monotonicStack = [];
  for (let i = prices.length - 1; i >= 0; i--) {
      while (monotonicStack.length > 0 && monotonicStack[monotonicStack.length - 1] > prices[i])
          monotonicStack.pop();
      if (monotonicStack.length > 0)
          results[i] = prices[i] - monotonicStack[monotonicStack.length - 1];
      else
          results[i] = prices[i];
      monotonicStack.push(prices[i]);
  }
  return results;
};