/*
 * @lc app=leetcode.cn id=1332 lang=javascript
 *
 * [1332] 删除回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
    if (s === s.split('').reverse().join('')) {
        return 1;
    }
    return 2;
};
// @lc code=end

