/**
 * Problem: Maximum depth of binary tree
 * Link to problem: https://leetcode.com/problems/maximum-depth-of-binary-tree
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
const preorder = (node, pos) => {
  let left = 0, right = 0;
  if (node !== null) {
      let leaf = node.left === null & node.right === null;
      if (leaf) return pos;
      left = preorder(node.left, pos + 1);
      right = preorder(node.right, pos + 1);
  } else {
      return 0;
  }
  if (left > right) return left;
  else return right;
}


const maxDepth = (root) => {
  return preorder(root, 1);
};