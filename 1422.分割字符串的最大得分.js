/*
 * @lc app=leetcode.cn id=1422 lang=javascript
 *
 * [1422] 分割字符串的最大得分
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    let value = 0;
    if (s[0] === '0') {
        value++;
    }
    for (let i = 1; i < s.length; i++) {
        if (s[i] === '1') {
            value++;
        }
    }
    let answer = value
    for (let i = 1; i < s.length - 1; i++) {
        if (s[i] === '1') {
            value--;
        } else {
            value++;
        }
        answer = Math.max(answer, value);
    }
    return answer;
};
// @lc code=end

