/**
 * Problem: Excel Sheet Column Number
 * Link to problem: https://leetcode.com/problems/excel-sheet-column-number
 * Coder: alexgargui
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = (columnTitle) => {
  let total = 0;
  columnTitle.split('').forEach((letter, i) => {
      let value = letter.charCodeAt() - 64;
      if (i == 0)
          total = value;
      else
          total = (total * 26) + value;
  });
  return total;
};