/**
 * Problem: Binary tree postorder traversal
 * Link to problem: https://leetcode.com/problems/binary-tree-postorder-traversal
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
const postorder = (node) => {
    if (node !== null) {
        postorder(node.left);
        postorder(node.right);
        postOrderTraversal.push(node.val);
    }
}

const postorderTraversal = (root) => {
    postOrderTraversal = [];
    postorder(root);
    return postOrderTraversal;
};