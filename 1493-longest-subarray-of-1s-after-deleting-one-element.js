/*
1493. Longest Subarray of 1's After Deleting One Element

Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

Example 1:

Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
Example 2:

Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
Example 3:

Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function(nums) {
    let index = 0
    let globalMax = 0
    let localMax = 0
    let increment = 0
    let previousSum = 0

    // loop through nums array
    while(index < nums.length) {
        
        // if it's a 1, increment the counter
        if(nums[index] == 1) {
            increment++
        } else {
            // else, sum the value left of 0 with the currently counter 1s, set the value left of 0 to increment and reset the counter
            localMax = previousSum + increment
            previousSum = increment
            increment = 0
        }

        if(localMax > globalMax) {
            globalMax = localMax
        }

        index++
    }

    // do it last time in case the array ends with 1
    localMax = previousSum + increment
    if(localMax > globalMax) {
        globalMax = localMax
    }

    // if the max value is equal to array length, it means that array is only 1s and delete one, otherwise return max value
    return globalMax == nums.length ? globalMax - 1 : globalMax
};

console.log(longestSubarray([0,1,1,0,1])) // 3
console.log(longestSubarray([0,1,1,1,0,1,1,0,1])) // 5
console.log(longestSubarray([1,1,1])) // 2