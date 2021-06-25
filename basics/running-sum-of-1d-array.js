/**
 * Problem: Running sum of 1d array
 * Link to problem: https://leetcode.com/problems/running-sum-of-1d-array
 * Coder: alexgargui
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
  let total = 0;
  let results = [];
  nums.forEach((number) => {
      total += number;
      results.push(total);
  });
  return results;
};