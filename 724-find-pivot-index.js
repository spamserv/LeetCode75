/*
724. Find Pivot Index

Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
 

Constraints:

1 <= nums.length <= 104
-1000 <= nums[i] <= 1000

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function(nums) {
    let index = -1
    let leftSideSum = 0

    // get the sum of all numbers in array
    let sum = nums.reduce((sum, value) => sum += value)

    for(let i = 0; i < nums.length; i++) {
        // for first and last index, sum to the left and to the right is 0, respectively, so in those cases, subtract the sum - nums[currentIndex] 
        // and compare to 0. if true, that is pivot index
        if (i == 0 || i == nums.length - 1) {
            if(sum - nums[i]== 0) {
                return i
            } 
        }

        // check if leftSide sum is equal to (sum - nums[currentIndex]) / 2, that is the pivot index
        if(leftSideSum == (sum - nums[i]) / 2) {
            return i
        }

        // increase leftSideSum by current value
        leftSideSum += nums[i]
    }
    return index
};

console.log(pivotIndex([1,7,3,6,5,6])) // 3
console.log(pivotIndex([1,2,3])) // -1