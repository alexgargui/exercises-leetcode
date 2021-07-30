/**
 * Problem: Boats to save people
 * Link to problem: https://leetcode.com/problems/boats-to-save-people
 * Coder: alexgargui
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
 const numRescueBoats = (people, limit) => {
  let boats = 0;
  let i = 0;
  let j = people.length - 1;
  people = people.sort((a, b) => a - b);
  while (i <= j) {
      boats++;
      if (people[i] + people[j] <= limit) i++;
      j--;
  }
  return boats;
};