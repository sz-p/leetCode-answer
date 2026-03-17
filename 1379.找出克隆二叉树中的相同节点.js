/*
 * @lc app=leetcode.cn id=1379 lang=javascript
 *
 * [1379] 找出克隆二叉树中的相同节点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    const path = [];
    const dfs = (node) => {
        if(node === target) {
            return true;
        }
        if(node.left) {
            path.push('left');
            if(dfs(node.left)) {
                return true;
            }
            path.pop();
        }
        if(node.right) {
            path.push('right');
            if(dfs(node.right)) {
                return true;
            }
            path.pop();
        }
        return false;
    };
    dfs(original);
    let node = cloned;
    for(let i=0;i<path.length;i++) {
        node = node[path[i]];
    }
    return node;
};
// @lc code=end

