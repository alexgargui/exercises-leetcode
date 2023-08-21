/**
 * Problem: Can place flowers
 * Link to problem: https://leetcode.com/problems/can-place-flowers
 * Coder: alexgargui
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
let canPlaceFlowers = (flowerbed, n) => {
  flowerbed.forEach((it, pos) => {
      if (it == 0) {
          if (flowerbed[pos-1] != 1 && flowerbed[pos+1] != 1 && n > 0) {
              flowerbed[pos] = 1;
              n--;
          }
      }
  });
  console.log(n);
  if (n == 0) return true;
  else return false;
};