/*
1456. Maximum Number of Vowels in a Substring of Given Length

Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
1 <= k <= s.length
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = function(s, k) {
    let maxVowels = 0
    let currentMaxVowels = 0
    let vowels = ['a', 'e', 'i', 'o', 'u']
    // iterate through string
    for(let i = 0; i < s.length; i++) {
        // fill up string for first k characters and increase maxVowels & currentMaxVowels
        if (i < k) {
            if(vowels.includes(s[i])) {
                maxVowels++
                currentMaxVowels++
            }
        } else {
            // apply sliding window technique - if the "oldest" index was a vowel, decrease the currentMaxVowel
            if(vowels.includes(s[i-k])) {
                currentMaxVowels--
            }

            // if the current index is a vowel, increase the currentMaxValue
            if(vowels.includes(s[i])) {
                currentMaxVowels++
            }

            // if current > max then current = max
            if(currentMaxVowels > maxVowels) {
                maxVowels = currentMaxVowels
            }

        }
    }

    return maxVowels
};

console.log(maxVowels("abciiidef", 3)) // 3
console.log(maxVowels("aeiou", 2)) // 2
console.log(maxVowels("leetcode", 3)) // 2