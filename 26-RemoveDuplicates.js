/**
 * @param {number[]} nums
 * @return {number}
 */

let removeDuplicates = function(nums) {
    return nums.filter((value, index, array) => {
        if (array[index] === array[index + 1]) return false;
        return true
    })
};

/**
 * @param {number[]} nums
 * @return {number}
 */

let removeDuplicatesFor = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums;
};

console.log(removeDuplicates([1, 1, 1, 1, 2, 3, 3]));