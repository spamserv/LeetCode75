/*
394. Decode String

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
 

Constraints:

1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range [1, 300].

abb2[a3[abc4[a]]b]c
*/

/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function(s) {
    // Use stack
    const stack = [];

    // For each character
    for (const char of s) {

        // If character is not "]"", push to stack and continue
        if (char !== "]") { 
            stack.push(char) 
            continue
        }

        // Else.. if pop first value 
        let currentChar = stack.pop()
        let currentString = ''

        // While character is not "[", append the character to current string
        while (currentChar !== '[') {
            currentString = currentChar + currentString
            currentChar = stack.pop()
        }

        // Get the number part of the string
        let num = ''
        currentChar = stack.pop()
        while (!Number.isNaN(Number(currentChar))) {
            num = currentChar + num;
            currentChar = stack.pop()
        }

        // Add current char for next iteration
        stack.push(currentChar)

        // Push the currentString num times (num * currentString)
        stack.push(currentString.repeat(Number(num)))
    }
    return stack.join('')
};


console.log(decodeString("3[a]2[bc]"))
console.log(decodeString("3[a2[c]]"))
console.log(decodeString("2[abc]3[cd]ef"))
console.log(decodeString("100[leetcode]"))