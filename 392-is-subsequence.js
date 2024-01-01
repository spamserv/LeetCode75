/*
392. Is Subsequence

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 

Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
 

Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function(s, t) {
    // go through "t" string and maintain the read letter from "s" string with an index variable.
    let index = 0
    let sLetter = s[index]

    if(s.length == 0) {
        return true
    }

    for(const letter of t) {
        if(letter == sLetter) {
            index++
            sLetter = s[index]
            // if index equals to length of the "s" string, it means that we read all the letter from it in the "t" string
            if(index == s.length) {
                return true
            }
        }
    }
    
    // otherwise, we didnt find all of the letter from "s" in "t"
    return false
};

console.log(isSubsequence("abc", "ahbgdc")) // true
console.log(isSubsequence("acx", "ahbgdc")) // false