/*
 * @lc app=leetcode.cn id=1217 lang=javascript
 *
 * [1217] 玩筹码
 */

// @lc code=start
/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let odd = 0, even = 0;
    for (const pos of position) {
        if (pos % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
    return Math.min(odd, even);
};
// @lc code=end

