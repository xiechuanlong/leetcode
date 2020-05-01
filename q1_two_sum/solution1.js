/**
 * 1. 暴力解法
 * 时间复杂度： T(n) = (n-1)*(n-2) = n^2-3n+2   O(n^2)
 * 空间复杂度： S(n)= 1 + 1   O(1)
 */

let twoSum = function(nums, target) {
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};

// test
let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(nums, target));