/**
 * Problem: House robber
 * Link to problem: https://leetcode.com/problems/house-robber
 * Coder: alexgargui
 * @param {number[]} nums
 * @return {number}
 */
 const rob = (nums) => {
  const memoization = [nums[0], nums[1]];
  let maxSteal = 0;
  if (nums.length >= 2) maxSteal = Math.max(nums[0], nums[1]);
  else maxSteal = nums[0];
  for (let i = 2; i < nums.length; i++) {
      for (let j = 0; j < i - 1; j++) {
          let sumPos = memoization[j] + nums[i];
          if (sumPos > maxSteal) maxSteal = sumPos;
      }
      memoization[i] = maxSteal;
  }
  return maxSteal;
};