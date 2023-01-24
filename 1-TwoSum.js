let twoSum = function(nums, target) {
    let sum;

    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {
            if (i === j) continue;
            sum = nums[i] + nums[j];
            if (sum === target) return [i, j];
        }
    }
};

console.log(twoSum([1, 2, 3, 4], 5));