/*
1657. Determine if Two Strings Are Close

Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

Example 1:

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"
Example 2:

Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
Example 3:

Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"
 

Constraints:

1 <= word1.length, word2.length <= 105
word1 and word2 contain only lowercase English letters.
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = function(word1, word2) {
    const map1 = {}
    const map2 = {};
    const valArr1 = []
    const valArr2 = []

    // If words aren't of the same length, return false
    if(word1.length != word2.length) {
        return false
    }
    
    // Create a map to count number of appearances for each character in strings word1 and word2
    for (const c of word1) {

        // if both words don't have the same characters, return false
        if(!word2.includes(c)) {
            return false
        }

        if (map1[c]) {
            map1[c]++;
        } else {
            map1[c] = 1;
        }
    }

    for (const c of word2) {
        if (map2[c]) {
            map2[c]++;
        } else {
            map2[c] = 1;
        }
    }
    
    // Create array containing only the values from the map1 & map2
    for(const index in map1) {
        valArr1.push(map1[index])
    }
    for(const index in map2) {
        valArr2.push(map2[index])
    }

    // Sort the arrays
    valArr1.sort()
    valArr2.sort()

    for(let i = 0; i < valArr1.length; i++) {
        // If values at the same indexes aren't the same, two strings aren't close
        if(valArr1[i] != valArr2[i]) {
            return false
        }
    }
    return true
};

console.log(closeStrings("abc", "bca")) // true
console.log(closeStrings("a", "aa")) // false
console.log(closeStrings("cabbba","abbccc")) // true
console.log(closeStrings("abbzzca","babzzcz"))