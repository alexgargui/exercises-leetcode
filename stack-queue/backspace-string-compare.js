/**
 * Problem: Backspace string compare
 * Link to problem: https://leetcode.com/problems/backspace-string-compare
 * Coder: alexgargui
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 const backspaceCompare = (s, t) => {
  s = [...s];
  t = [...t];
  let itS = 0;
  while (itS < s.length) {
      if (s[itS] === '#' && itS !== 0) {
          s.splice(itS - 1, 2);
          itS = 0;
      } else if (s[itS] === '#' && itS === 0) {
          s.splice(itS, 1);
      } else {
          itS++;
      }
  }
  let itT = 0;
  while (itT < t.length) {
      if (t[itT] === '#' && itT !== 0) {
          t.splice(itT - 1, 2);
          itT = 0;
      } else if (t[itT] === '#' && itT === 0) {
          t.splice(itT, 1);
      } else {
          itT++;
      }
  }
  console.log(s);
  console.log(t);
  if (s.toString() === t.toString()) return true;
  else return false;
};


