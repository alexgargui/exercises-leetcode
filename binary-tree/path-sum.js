/**
 * Problem: Path sum
 * Link to problem: https://leetcode.com/problems/path-sum
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
 * @param {number} targetSum
 * @return {boolean}
 */
const preorder = (node, sum, targetSum) => {
    if (node !== null) {
        if ((sum + node.val) === targetSum && node.left === null && node.right === null) result = true;
        preorder(node.left, sum + node.val, targetSum);
        preorder(node.right, sum + node.val, targetSum);
    }
}

const hasPathSum = (root, targetSum) => {
    result = false;
    preorder(root, 0, targetSum);
    return result;
};