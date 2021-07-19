/**
 * Problem: Maximum subarray
 * Link to problem: https://leetcode.com/problems/maximum-subarray
 * Coder: alexgargui
 * @param {number[]} nums
 * @return {number}
 */
 const maxSubArray = (nums) => {
  let memoization = [nums[0]];
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
      const maxPos = Math.max(memoization[i - 1] + nums[i], nums[i]);
      memoization[i] = maxPos;
      if (maxPos > maxSum) maxSum = maxPos;
  }
  return maxSum;
};