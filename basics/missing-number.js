/**
 * Problem: Missing number
 * Link to problem: https://leetcode.com/problems/missing-number
 * Coder: alexgargui
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  let missedNumber;
  let numberIsFound = false;
  nums.sort((a, b) => {return a - b});
  console.log(nums)
  nums.forEach((num, i) => {
      if (num !== i && !numberIsFound) {
          missedNumber = i;
          numberIsFound = true;
      } else if (i === nums.length - 1 && !numberIsFound) {
          missedNumber = nums.length;
      }
  });
  return missedNumber;
};