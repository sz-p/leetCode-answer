/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
 */

// @lc code=start
/**
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
const getTreeMaxDeep = function (root) {
    let deep = 1;
    while (root.left) {
        deep++;
        root = root.left
    }
    return deep;
}
const getNodeCountByMaxDeep = function (maxDeep) {
    return [Math.pow(2, maxDeep - 1), Math.pow(2, maxDeep) - 1]
}
const existsNode = function (root, level, k) {
    let bits = 1 << (level - 2)
    let node = root;
    while (node !== null && bits > 0) {
        if (!(bits & k)) {
            node = node.left;
        } else {
            node = node.right;
        }
        bits >>= 1;
    }
    return node !== null;
}
const binarySearch = function (root, maxDeep, range) {
    let middleValue = parseInt((range[0] + range[1]) / 2)
    while (range[1] > range[0]) {
        if (existsNode(root, maxDeep, middleValue)) {
            range[0] = middleValue
        } else {
            range[1] = middleValue - 1
        }
        middleValue = parseInt((range[0] + 1 + range[1]) / 2);
    }
    return range[0]
}

var countNodes = function (root) {
    if (!root) return 0
    const maxDeep = getTreeMaxDeep(root);
    const nodeRange = getNodeCountByMaxDeep(maxDeep);
    return binarySearch(root, maxDeep, nodeRange)
};

// @lc code=end

