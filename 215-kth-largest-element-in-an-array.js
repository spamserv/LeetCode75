/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
    // with sorting
    /*
    let sortedDesc = nums.sort((a, b) => a - b)
    console.log(sortedDesc)
    return sortedDesc[nums.length - k]
    */

    // without sorting
    let kMap = new Map()
    let count = 0

    for (const num of nums) {
        kMap.set(num, (kMap.get(num) || 0) + 1)
    }

    let minNum = Math.min(...nums)
    let maxNum = Math.max(...nums)

    for (let i = maxNum; i >= minNum; i--) {
        if(kMap.has(i)) {
            count += kMap.get(i)
            if (count >= k) {
                return i
            }
        }
    }
};