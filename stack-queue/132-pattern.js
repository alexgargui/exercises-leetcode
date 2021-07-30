/**
 * Problem: 132 patters
 * Link to problem: https://leetcode.com/problems/132-pattern
 * Type structure: Monotonic Stack
 * Coder: alexgargui
 * @param {number[]} nums
 * @return {boolean}
 */
 const find132pattern = (nums) => {
  let monotonicStack = [];
  let k = Number.MIN_SAFE_INTEGER;
  for (let i = nums.length - 1; i >= 0; --i) {
      if (k > nums[i])
          return true
      while (monotonicStack.length > 0 && monotonicStack[monotonicStack.length - 1] < nums[i]) {
          k = monotonicStack[monotonicStack.length - 1];
          monotonicStack.pop();
      }
      monotonicStack.push(nums[i]);
  }
  return false;
};