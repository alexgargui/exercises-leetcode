/**
 * Problem: Climbing stairs
 * Link to problem: https://leetcode.com/problems/climbing-stairs
 * Coder: alexgargui
 * @param {number} size
 * @return {number}
 */
var climbStairs = function(size) {
  let memoization = [1, 2];
  for (let i = 2; i < size; i++) {
      memoization[i] = memoization[i-2] + memoization[i-1];
  }
  return memoization[size-1];
};