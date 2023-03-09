/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let left = 0;
    let right = nums.reduce((total, number) => total += number, 0);

    for (var i = 0; i <= nums.length - 1; i++) {
        let curr = nums[i];

        right -= curr;

        if (left === right) return i;

        left += curr;
    }

    return -1;
};

console.log(pivotIndex([-1,-1,-1,-1,-1,0]))