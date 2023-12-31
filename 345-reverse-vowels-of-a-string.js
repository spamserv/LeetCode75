/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
    // 1. get all the vowels
    const vowelsInWord = []
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for(letter of s) {
        if (vowels.includes(letter.toLowerCase())) {
            vowelsInWord.push(letter)
        }
    }
    
    console.log(vowelsInWord)

    const splitted = s.split("")
    // 2. place the vowel of [length - N] to N
    for(let i = 0; i < splitted.length; i++) {
        if(vowels.includes(splitted[i].toLowerCase())) {
            const popped = vowelsInWord.pop()
            splitted[i] = popped
        }
    }
    
    return splitted.join("")
};

console.log(reverseVowels("hello"))
console.log(reverseVowels("leetcode"))
console.log(reverseVowels("aA"))