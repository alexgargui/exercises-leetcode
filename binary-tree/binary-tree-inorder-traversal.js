/**
 * Problem: Binary tree inorder traversal
 * Link to problem: https://leetcode.com/problems/binary-tree-inorder-traversal
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
let inOrderTraversal = [];

let inorder = (node) => {
    if (node !== null) {
        inorder(node.left);
        inOrderTraversal.push(node.val);
        inorder(node.right);
    }
}

let inorderTraversal = (root) => {
    inOrderTraversal = [];
    inorder(root);
    return inOrderTraversal;
};