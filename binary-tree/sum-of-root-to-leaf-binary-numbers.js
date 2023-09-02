/**
 * Problem: Sum of root to leaf binary numbers
 * Link to problem: https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers
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
const preorder = (node, binary) => {
  if (node !== null) {
      if (node.left === null && node.right === null) sum += parseInt(binary.concat(node.val), 2);
      preorder(node.left, binary.concat(node.val));
      preorder(node.right, binary.concat(node.val));
  }
}

const sumRootToLeaf = (root) => {
    sum = 0;
    preorder(root, "");
    return sum;
};