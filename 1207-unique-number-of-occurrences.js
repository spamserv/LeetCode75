/*
1207. Unique Number of Occurrences

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
 

Constraints:

1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function (arr) {
    const map = {};
    const valArr = []
    // Create a map to count number of appearances for each number in array
    for (const num of arr) {
        if (map[num.toString()]) {
            map[num.toString()]++;
        } else {
            map[num.toString()] = 1;
        }
    }
    
    // Create array containing only the values from the map
    for(const index in map) {
        valArr.push(map[index])
    }

    const set = new Set(valArr)

    // If the length of set is equal to length of the number counter array is equal, all the numbers are unique
    if(valArr.length == [...set].length) {
        return true
    }

    return false;
};

console.log(uniqueOccurrences([1,2,2,1,1,3]))
console.log(uniqueOccurrences([1,2]))
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))