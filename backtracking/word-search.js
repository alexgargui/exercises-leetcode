/**
 * Problem: Word search
 * Link to problem: https://leetcode.com/problems/word-search
 * Coder: alexgargui
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 let exists = false;
 const mobility = [
   [-1, 0],
   [0, 1],
   [1, 0],
   [0, -1],
 ];
 
 const backtracking = (board, row, column, word, formedWord, letterPosition) => {
     if (formedWord === word) exists = true;
     if (!exists) {
         mobility.forEach((position) => {
             const newRow = row + position[0];
             const newColumn = column + position[1];
             if (newRow >= 0 && newRow < board.length) {
                 if (newColumn >= 0 && newColumn < board[0].length) {
                     if (board[newRow][newColumn] === word[letterPosition]) {
                         const removedLetter = board[row][column];
                         board[row][column] = '';
                         const tempWord = formedWord + word[letterPosition];
                         backtracking(board, newRow, newColumn, word, tempWord, letterPosition + 1);
                         board[row][column] = removedLetter;
                     }
                 }
             }
         });
     }
 };
 
 const exist = (board, word) => {
     exists = false;
     for (let row = 0; row < board.length; row++) {
         for (let column = 0; column < board[0].length; column++) {
             if (board[row][column] === word[0] && !exists) {
                 backtracking(board, row, column, word, word[0], 1);
             }
         }
     }
     return exists;
 };