/**
 * Problem: Pascal's triangle
 * Link to problem: eetcode.com/problems/pascals-triangle
 * Coder: alexgargui
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  let memoization = [];
  for (let i = 0; i < numRows; i++) {
      if (i === 0) { 
          memoization[i] = [1];
      } else if (i === 1) {
          memoization[i] = [1, 1];
      } else {
          let arr = [1]
          for (let j = 1; j < i; j++) {
              arr[j] = memoization[i-1][j-1] + memoization[i-1][j];
          }
          arr.push(1);
          memoization[i] = arr;
      }
  }
  return memoization;
};