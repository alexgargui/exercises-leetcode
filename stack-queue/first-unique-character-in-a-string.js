/**
 * Problem: First unique character in a string
 * Link to problem: https://leetcode.com/problems/first-unique-character-in-a-string
 * Coder: alexgargui
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let stack = new Map();
  for (let i = 0; i < s.length; i++) {
      stack.set(s.charAt(i), stack.get(s.charAt(i)) + 1 || 1);
  }
  let letter;
  let isFounded = false;
  stack.forEach((value, key) => {
      if (value === 1 && !isFounded) {
          letter = key;
          isFounded = true;
      }
  });
  return s.indexOf(letter);
};