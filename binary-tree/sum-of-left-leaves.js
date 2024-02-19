/**
 * Problem: Sum of left leaves
 * Link to problem: https://leetcode.com/problems/sum-of-left-leaves
 * Coder: alexgargui
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const preOrder = (root, isLeft) => {
  let left = 0, right = 0;
  if (root !== null) {
      if (isLeft && !root.left && !root.right) return root.val;
      left = preOrder(root.left, true);
      right = preOrder(root.right, false);
  }
  return left + right;
};

const sumOfLeftLeaves = (root) => {
  return preOrder(root, false);
};