/**
 * Problem: Uniques paths
 * Link to problem: https://leetcode.com/problems/unique-paths
 * Coder: alexgargui
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 const uniquePaths = (m, n) => {
  const matriz = [];
  for (let i = 0; i < n; i++) {
      matriz[i] = [];
      for (let j = 0; j < m; j++) {
          if (i > 0 && j > 0) matriz[i][j] = matriz[i - 1][j] + matriz[i][j - 1];
          else matriz[i][j] = 1;
      }
  }
  return matriz[n - 1][m - 1];
};