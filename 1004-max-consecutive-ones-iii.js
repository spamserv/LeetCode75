/*
1004. Max Consecutive Ones III

Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = function(nums, k) {
    let counter = 0, index = 0;
    
    while(index < nums.length) {
        // if current index value is 0, reduce k (number of available 0s)
        if(nums[index] === 0) {
            k--;
        }

        if(k < 0) {
            // if current sliding window counter value is 0, increase the k (number of available 0s) as the 0 is irrelevant
            if(nums[counter] === 0) {
                k++;
            }

            // increase the counter
            counter++;
        }
        index++;
    }

    // return the total length of array - the length of initial part of the array that does not contribute to the longest sequence of 1s
    return nums.length - counter;
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2))
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))


