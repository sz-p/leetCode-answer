/*
 * @lc app=leetcode.cn id=944 lang=javascript
 *
 * [944] 删列造序
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
    let answer = 0;
    if (strs.length <= 1 || strs[0].length === 0) return answer;
    for (let i = 0; i < strs[0].length; i++) {
        for (j = 1; j < strs.length; j++) {
            if (strs[j][i] >= strs[j - 1][i]) {
                continue
            } else {
                answer++
                break;
            }
        }
    }
    return answer
};
// @lc code=end

