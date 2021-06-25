/**
 * Problem: Length of last word
 * Link to problem: https://leetcode.com/problems/length-of-last-word
 * Coder: alexgargui
 * @param {string} s
 * @return {number}
 */
 let lengthOfLastWord = (s) => {
  if (s === ' ') return 0;
  s = s.trim();
  const DATA = s.split(' ');
  return DATA[DATA.length - 1].length;
};