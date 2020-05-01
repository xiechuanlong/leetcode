/**
 * 1. 使用hash表， 元素和下标对应，根据元素找出下标
 * 时间复杂度： T(n) = n + n   O(n)
 * 空间复杂度： S(n)= n + 1 + 1 +1   O(n)
 * 
 * 问题， 如果存在重复的值， 那么就会覆盖了。
 */

 let twoSum = function(nums, target) {
     let hash = {};
     for(let i = 0; i < nums.length; i++) {
        hash[nums[i]] = i;
     }
     for(let j = 0; j < nums.length; j++) {
         let m = hash[target - nums[j]];
        if( m && j!=m) {
            return [j, m]
        }
     }
 }

 // test
let nums = [2, 5, 5, 5, 7, 11, 15];
let target = 10;

console.log(twoSum(nums, target));

// hash表优化
let twoSum2 = function(nums, target) {
    let hash = {};
    for(let i = 0; i < nums.length; i++) {
       let j = hash[target - nums[i]];
       if(j && j!=i) {
           return [i, j];
       }
        hash[nums[i]] = i;
    }
}

console.log(twoSum2(nums, target));