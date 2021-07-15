/**
 * Problem: Flood fill
 * Link to problem: https://leetcode.com/problems/flood-fill
 * Coder: alexgargui
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 const mobility = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1]
];

const paint = (image, sr, sc, newColor, startingColor) => {
 image[sr][sc] = newColor;
 mobility.forEach((position) => {
     const newRow = sr + position[0];
     const newColumn = sc + position[1];
     if (newRow >= 0 && newRow < image.length) {
         if (newColumn >= 0 && newColumn < image[0].length) {
             if (startingColor === image[newRow][newColumn]) {
                  paint(image, newRow, newColumn, newColor, startingColor);
             }
         }
     }
 });
};

const floodFill = (image, sr, sc, newColor) => {
  const startingColor = image[sr][sc];
  if (image[sr][sc] !== newColor) paint(image, sr, sc, newColor, startingColor);
  return image;
};