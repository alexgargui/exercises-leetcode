/**
 * Problem: Minimum depth of binary tree
 * Link to problem: https://leetcode.com/problems/minimum-depth-of-binary-tree
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
const preOrder = (root, index) => {
  let left = null, right = null;
  if (root !== null) {
      if (!root.left && !root.right) return index;
      left = preOrder(root.left, index + 1);
      right = preOrder(root.right, index + 1);
  }
  if (left && !right) return left;
  else if (!left && right) return right;
  else if (left < right) return left;
  else return right;
}

const minDepth = (root) => {
  if (root) return preOrder(root, 1);
  else return 0;
};