/**
 * Problem: Kids with the greatest number of candies
 * Link to problem: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies
 * Coder: alexgargui
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 const kidsWithCandies = (candies, extraCandies) => {
  let maxCandies = 0;
  candies.forEach((candy, index) => {
      candies[index] = candy + extraCandies;
      if (candy > maxCandies) maxCandies = candy;
  });
  let result = [];
  candies.forEach((candy) => {
     if (candy >= maxCandies) result.push(true);
      else result.push(false);
  });
  return result;
};