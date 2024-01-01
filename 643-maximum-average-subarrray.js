/*
643. Maximum Average Subarray I

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000
 

Constraints:

n == nums.length
1 <= k <= n <= 105
-104 <= nums[i] <= 104
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function(nums, k) {
    let subArrayMax = 0
    let currentArrayMax = 0
    for(let i = 0; i < nums.length; i++) {
        // Fill the array with first k numbers
        if(i < k) {
            subArrayMax += nums[i]
            currentArrayMax += nums[i]
        } else {
            // Calculate current subarray max (remove the first item and add the last item)
            currentArrayMax = currentArrayMax - nums[i - k] + nums[i]

            // If subarray maximum is smaller than currentArrayMax, set the subarray maximum to currentArrayMax
            if(subArrayMax < currentArrayMax) {
                subArrayMax = currentArrayMax
            }
        }
    }

    // Divide by the length of subarray
    return subArrayMax/k
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))
console.log(findMaxAverage([5], 1))
console.log(findMaxAverage([6,8,6,8,0,4,1,2,9,9], 2))
console.log(findMaxAverage([0,4,0,3,2], 1))