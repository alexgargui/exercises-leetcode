/**
 * Problem: Valid mountain array
 * Link to problem: https://leetcode.com/problems/valid-mountain-array
 * Coder: alexgargui
 * @param {number[]} arr
 * @return {boolean}
 */
 const validMountainArray = (arr) => {
  let i = 0;
  while (i + 1 < arr.length && arr[i] < arr[i + 1]) i++;
  if (i === 0 || i === arr.length - 1) return false;
  while (i + 1 < arr.length && arr[i] > arr[i + 1]) i++;
  return i === arr.length - 1;
};