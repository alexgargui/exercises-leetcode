/**
 * Problem: Path with minimum effort
 * Link to problem: https://leetcode.com/problems/path-with-minimum-effort
 * Coder: alexgargui
 * @param {number[][]} heights
 * @return {number}
 */
const minimumEffortPath = ((heights) => {
  const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];
  const heap = [[0, 0, 0]];
  let distances = Array.from(Array(heights.length), () => Array(heights[0].length).fill(Infinity));

  distances[0][0] = 0;

  while(heap.length) {
    const [x, y, effort] = heap.shift();
            
    for (let [nx, ny] of directions) {
      const row = nx + x;
      const column = ny + y;
      if (row >= 0 && row < heights.length 
        && column >= 0 && column < heights[0].length) {
          const newEffort = Math.max(effort, Math.abs(heights[x][y] - heights[row][column]));
          if (newEffort < distances[row][column]) {
            distances[row][column] = newEffort;
            heap.push([row, column, newEffort]);
          }
      }
    }
  }
  return distances[heights.length - 1][heights[0].length - 1];
});

console.log(minimumEffortPath([[1,2,2],[3,8,2],[5,3,5]]));