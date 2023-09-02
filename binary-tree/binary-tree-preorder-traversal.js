/**
 * Problem: Binary tree preorder traversal
 * Link to problem: https://leetcode.com/problems/binary-tree-preorder-traversal
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
 * @return {number[]}
 */
const preorder = (node) => {
    if (node !== null) {
        preOrderTraversal.push(node.val);
        preorder(node.left);
        preorder(node.right);
    }
}

const preorderTraversal = (root) => {
    preOrderTraversal = [];
    preorder(root);
    return preOrderTraversal;
};