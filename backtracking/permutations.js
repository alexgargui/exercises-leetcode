/**
 * Problem: Can place flowers
 * Link to problem: https://leetcode.com/problems/permutations
 * Coder: alexgargui
 * Algorithm: Solved with Heap Algorithm instead of backtracking
 * @param {number[]} nums
 * @return {number[][]}
 */
let permutations = [];

const heapPermutation = (nums, size) => {
    if (size === 1) 
        permutations.push([...nums]);
    for (let i = 0; i < size; i++) {
        heapPermutation(nums, size - 1);
        if (size % 2 === 1) {
            let tmp = nums[0];
            nums[0] = nums[size - 1];
            nums[size - 1] = tmp;
        } else {
            let tmp = nums[i];
            nums[i] = nums[size - 1];
            nums[size - 1] = tmp;
        }
    }
}

const permute = (nums) => {
    permutations = [];
    heapPermutation(nums, nums.length)
    return permutations;
};