/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumberIndex = function(nums) {
    for (let i = 0; i< nums.length; i++) {
        if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) return nums[i];
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumberSort = function(nums) {
    nums.sort()
    for (let i = 0; i< nums.length; i++) {
        if (nums[i] === nums[i + 1]) i++;
        else return nums[i] 
    }
};

console.log(singleNumberIndex([1, 1, 2, 2, 3, 3, 4, 5, 5]))
console.log(singleNumberSort([1, 1, 2, 2, 3, 3, 4, 5, 5]))