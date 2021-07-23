/**
 * Problem: Longest substring without repeating characters
 * Link to problem: https://leetcode.com/problems/longest-substring-without-repeating-characters
 * Coder: alexgargui
 * @param {string} s
 * @return {number}
 */
 const lengthOfLongestSubstring = (s) => {
  let appearLetters = {};
  const arrayLetters = [...s]
  let max = 0;
  let cont = 0;
  let lastDeleted = 0;
  arrayLetters.forEach((c, i) => {
      if (i > 0) {
          if (arrayLetters[i - 1] !== c && (appearLetters[c] === undefined || appearLetters[c] < lastDeleted)) {
              cont++;
              if (i === s.length - 1 && cont > max) max = cont;
          } else {
              if (cont > max) max = cont;
              cont = (i + 1) - appearLetters[c];
              lastDeleted = appearLetters[c];
          }
          appearLetters[c] = i + 1;
      } else {
          appearLetters[c] = i + 1;
          cont++;
          max++;
      }
  });
  return max;
};