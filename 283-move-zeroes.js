/*
283. Move Zeroes
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    // Iterate through array
    for(const [index, value] of nums.entries()) {
        // Find occurence of zero
        if(value == 0) {
            let currentIndex = index
            // Switch zeroes with non-zero values until the end of the array
            for(let i = index + 1; i < nums.length; i++) {
                if(nums[i] != 0) {
                    nums[currentIndex] = nums[i]
                    nums[i] = 0
                    currentIndex = i      
                }
            }
        }
    }
    return nums
};

console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0]))