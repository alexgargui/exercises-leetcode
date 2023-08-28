/**
 * Problem: Majority element
 * Link to problem: https://leetcode.com/problems/majority-element
 * Coder: alexgargui
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
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