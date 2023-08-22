/**
 * Problem: Remove duplicates from sorted array
 * Link to problem: https://leetcode.com/problems/remove-duplicates-from-sorted-array
 * Coder: alexgargui
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let lastNumber;
  let i = 0;
  while(i < nums.length) {
      if (lastNumber === nums[i]) {
          nums.splice(i, 1);
      } else {
          lastNumber = nums[i];
          i++;
      }
  }
};