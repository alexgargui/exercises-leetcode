/**
 * Problem: Valid parentheses
 * Link to problem: https://leetcode.com/problems/valid-parentheses
 * Coder: alexgargui
 * @param {string} s
 * @return {boolean}
 */
 const isValid = (s) => {
  const ARRAY = s.split('');
  let stack = [];
  const CLOSED_PARANTHESES = {
      ')': '(',
      '}': '{',
      ']': '['
  };
  ARRAY.forEach((c) => {
      if (['(', '{', '['].indexOf(c) >= 0) {
          stack.push(c);
      } else {
          if (CLOSED_PARANTHESES[c] === stack[stack.length - 1]) stack.pop();
          else stack.push(c);
      }
  });
  if (stack.length > 0) return false;
  else return true;
};