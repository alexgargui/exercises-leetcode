/**
 * Problem: Longest consecutive sequence
 * Link to problem: https://leetcode.com/problems/longest-consecutive-sequence
 * Coder: alexgargui
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
  let consecutiveNumbers = {};
  let max = 0;
  nums.forEach((num) => consecutiveNumbers[num] = 1);
  nums.forEach((num) => {
      let cont = 0;
      if (consecutiveNumbers[num - 1] === undefined) {
          let itNum = num;
          while (consecutiveNumbers[itNum] !== undefined) {
              cont++;
              itNum++;
          }
      }
      if (cont > max) max = cont;
  });
  return max;
};