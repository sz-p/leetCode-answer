/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
	let temp;
	let len = s.length;
	for (let i = 0; i < len / 2; i++) {
		temp = s[i];
		s[i] = s[len - i - 1];
		s[len - i - 1] = temp;
	}
};

// @lc code=end
