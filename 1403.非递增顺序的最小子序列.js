/*
 * @lc app=leetcode.cn id=1403 lang=javascript
 *
 * [1403] 非递增顺序的最小子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    const sum = nums.reduce((a, b) => a + b, 0);
    nums.sort((a, b) => b - a);
    let subSum = 0;
    const res = [];
    for(let i = 0; i < nums.length; i++) {
        subSum += nums[i];
        res.push(nums[i]);
        if(subSum > sum - subSum) {
            break;
        }
    }
    return res;
};
// @lc code=end

