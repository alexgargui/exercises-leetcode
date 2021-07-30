/**
 * Problem: Next greater element 1
 * Link to problem: https://leetcode.com/problems/next-greater-element-i
 * Type structure: Monotonic Stack
 * Coder: alexgargui
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 const nextGreaterElement = (nums1, nums2) => {
  const ms = {};
  const tp = [];
  const result = [];
  for (let i = nums2.length - 1; i >= 0; --i) {
      while (tp.length > 0 && tp[tp.length - 1] <= nums2[i]) tp.pop();
      if (tp.length === 0) ms[nums2[i]] = -1;
      else ms[nums2[i]] = tp[tp.length - 1];
      tp.push(nums2[i])
  }
  nums1.forEach((num) => result.push(ms[num]));
  return result;
};