/**
 * Problem: Two sum
 * Link to problem: https://leetcode.com/problems/two-sum
 * Coder: alexgargui
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let sums = new Map();
  let result = [];
  nums.forEach((n, i) => {
      if (sums.has(n)) {
          result = [sums.get(n), i];
      } else { 
          sums.set(target - n, i);
      }
  });
  return result;
};