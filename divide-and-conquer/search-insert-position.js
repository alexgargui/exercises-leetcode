/**
 * Problem: Search insert position
 * Link to problem: https://leetcode.com/problems/search-insert-position
 * Coder: alexgargui
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  let start = 0, final = nums.length;
  while (start < final) {
      let middle = start + Math.floor((final - start)/2);
      if (target > nums[middle]) start = middle + 1;
      else final = middle;
  }
  return start;
};