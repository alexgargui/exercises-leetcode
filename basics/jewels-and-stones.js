/**
 * Problem: Jewels and stones
 * Link to problem: https://leetcode.com/problems/jewels-and-stones
 * Coder: alexgargui
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = (jewels, stones) => {
  const JEWELS_ARRAY = jewels.split('');
  const STONES_ARRAY = stones.split('');
  let totalJewels = 0;
  JEWELS_ARRAY.forEach((jewel) => {
    const STONES_FILTER = STONES_ARRAY.filter(stone => stone === jewel);
    totalJewels += STONES_FILTER.length;
  });
  return totalJewels;
};