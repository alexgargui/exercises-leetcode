/**
 * Problem: Trapping rain water
 * Link to problem: https://leetcode.com/problems/trapping-rain-water
 * Coder: alexgargui
 * @param {number[]} height
 * @return {number}
 */
 const trap = (height) => {
  const leftHeights = [];
  const rightHeights = [];
  leftHeights[0] = height[0];
  rightHeights[height.length - 1] = height[height.length - 1];
  for (let i = 1; i < height.length; i++) {
      leftHeights[i] = Math.max(leftHeights[i - 1], height[i]);
  }
  for (let j = height.length - 2; j >= 0; j--) {
      rightHeights[j] = Math.max(rightHeights[j + 1], height[j]);
  }
  let trappedWater = 0;
  for (let i = 0; i < height.length; i++) {
      trappedWater += Math.min(leftHeights[i], rightHeights[i]) - height[i];
  }
  return trappedWater;
};