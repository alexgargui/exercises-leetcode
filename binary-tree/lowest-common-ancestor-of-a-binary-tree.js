/**
 * Problem: Lowest common ancestor of a binary tree
 * Link to problem: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree
 * Coder: alexgargui
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const bts = (node, p, q) => {
  let left, right;
  if (node !== null) {
      if (node.val === p.val || node.val === q.val) {
          console.log(node.val);
          return node;
      }
      left = bts(node.left, p, q);
      right = bts(node.right, p, q);
  }
  if (left !== null && right !== null)
      return node;
  else if (left !== null)
      return left;
  else if (right !== null)
      return right;
  return null;
};

var lowestCommonAncestor = function(root, p, q) {
  return bts(root, p, q);
};