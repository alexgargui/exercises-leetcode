/**
 * Problem: Max area of island
 * Link to problem: https://leetcode.com/problems/max-area-of-island
 * Coder: alexgargui
 * @param {number[][]} grid
 * @return {number}
 */
let total = 0;
const mobility = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const validIsland = (grid, row, column) => {
  grid[row][column] = 0;
  total += 1;
  mobility.forEach((position) => {
    const newRow = row + position[0];
    const newColumn = column + position[1];
    if (newRow >= 0 && newRow < grid.length) {
      if (newColumn >= 0 && newColumn < grid[0].length) {
        if (grid[newRow][newColumn] === 1) {
          validIsland(grid, newRow, newColumn);
        }
      }
    }
  });
};

const maxAreaOfIsland = (grid) => {
  total = 0;
  let result = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (grid[row][column] === 1) {
        validIsland(grid, row, column);
        if (total > result) result = total;
        total = 0;
      }
    }
  }
  return result;
};
