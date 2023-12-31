/*
334. Increasing Triplet Subsequence
Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

Example 1:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
Example 2:

Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.
Example 3:

Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 

Constraints:

1 <= nums.length <= 5 * 105
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = function(nums) {
    let i = null;
    let j = null;

    for(const num of nums) {
        
        if(i == null || i >= num) {
            i = num;
            continue;
        }

        if(j == null || j >= num) {
            j = num;
            continue;
        }

        return true;
    }

    return false;
};

console.log(increasingTriplet([1,2,3,4,5]))
console.log(increasingTriplet([5,4,3,2,1]))
console.log(increasingTriplet([2,1,5,0,4,6]))
console.log(increasingTriplet([20,100,10,12,5,13]))