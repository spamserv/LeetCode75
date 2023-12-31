/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let length
    let isWord1Lenghtier = false
    if(word1.length < word2.length) {
        isWord1Lenghtier = false
        length = word1.length
    } else {
        isWord1Lenghtier = true
        length = word2.length
    }
    let mergedString = ""
    let i = 0
    while(i < length) {
        mergedString += word1[i]
        mergedString += word2[i]
        i++
    }

    if(isWord1Lenghtier) {
        while(i < word1.length) {
            mergedString += word1[i]
            i++
        }
    } else {
        while(i < word2.length) {
            mergedString += word2[i]
            i++
        }
    }
    return mergedString
};

mergeAlternately("abc", "pqr")
mergeAlternately("ab","pqexk")
mergeAlternately("abcdef", "01")