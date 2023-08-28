/**
 * Problem: Jump game
 * Link to problem: https://leetcode.com/problems/jump-game
 * Coder: alexgargui
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
  let memoization = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
      if (memoization[i-1] >= i) memoization[i] = Math.max(memoization[i-1], (nums[i] + i));
  }
  return memoization[nums.length - 1] >= nums.length - 1 ? true : false;
};