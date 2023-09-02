/**
 * Problem: Range sum of bst
 * Link to problem: https://leetcode.com/problems/range-sum-of-bst
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const preorder = (node, low, high) => {
  if (node !== null) {
      if (node.val >= low && node.val <= high) result += node.val;
      preorder(node.left, low, high);
      preorder(node.right, low, high);
  }
}

const rangeSumBST = (root, low, high) => {
  result = 0;
  preorder(root, low, high);
  return result;
};