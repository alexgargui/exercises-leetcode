/**
 * Problem: Lowest common ancestor of a binary search tree
 * Link to problem: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree
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
const bts = (node, minimumNumber, highestNumber) => {
  if (node !== null) {
      if (node.val < minimumNumber) return bts(node.right, minimumNumber, highestNumber);
      if (node.val > highestNumber) return bts(node.left, minimumNumber, highestNumber);
      return node;
  }

};

const lowestCommonAncestor = (root, p, q) => {
  let highestNumber = p.val > q.val ? p.val : q.val;
  let minimumNumber = p.val < q.val ? p.val : q.val;
  return bts(root, minimumNumber, highestNumber);
};