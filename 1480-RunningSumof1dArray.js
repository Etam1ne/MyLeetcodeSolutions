/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;
        for (let j = 0; j <= i; j++) {
            currentSum += nums[j];
        }
        result.push(currentSum);
    }
    return result;
};

console.log(runningSum([1,2,3,4]));