/**
 * Problem: Majority element
 * Link to problem: https://leetcode.com/problems/majority-element
 * Coder: alexgargui
 * Algorithm: Boyer-Moore voting algorithm
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  let candidate;
  let count = 0;
  nums.forEach((num) => {
      if (count === 0) {
          candidate = num;
      }
      count += candidate === num ? 1 : -1;
  });
  return candidate;
};