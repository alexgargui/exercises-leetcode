/**
 * Problem: Min cost climbing stairs
 * Link to problem: https://leetcode.com/problems/min-cost-climbing-stairs
 * Coder: alexgargui
 * @param {number[]} cost
 * @return {number}
 */
 const minCostClimbingStairs = (cost) => {
  let memoization = [cost[0], cost[1]];
  for (let i = 2; i < cost.length; i++) {
      memoization[i] = Math.min(memoization[i - 1], memoization[i - 2]) + cost[i];
  }
  return Math.min(memoization[memoization.length - 1], memoization[memoization.length - 2]);
};