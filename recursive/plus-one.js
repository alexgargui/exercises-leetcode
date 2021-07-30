/**
 * Problem: Plus one
 * Link to problem: https://leetcode.com/problems/plus-one
 * Coder: alexgargui
 * @param {number[]} digits
 * @return {number[]}
 */
 let result = [];
 const sum = (arr, pos, plus) => {
     if (pos <= -1 && plus === 0) {
         return 0;
     } else if (pos <= -1 && plus === 1) {
         result.unshift(1);
         return 0;
     }
     if (arr[pos] + plus === 10) {
         let aggregate = (arr[pos] + plus) - 10;
         result.unshift(aggregate);
         sum(arr, pos - 1, 1);
     } else {
         result.unshift(arr[pos] + plus);
         sum(arr, pos - 1, 0);
     }
 }
 
 const plusOne = (digits) => {
     result = [];
     sum(digits, digits.length - 1, 1);
     return result;
 };