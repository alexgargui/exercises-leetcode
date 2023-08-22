/**
 * Problem: Reverse integer
 * Link to problem: https://leetcode.com/problems/reverse-integer
 * Coder: alexgargui
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  let arr = x.toString().split('');
  let result;
  if (arr[0] === '-')
      result = Number('-' + arr.slice(1, arr.length).reverse().join(''));
  else
      result = Number(arr.reverse().join(''));
  if (result > -2147483648 && result < 2147483648) return result;
  else return 0;
};