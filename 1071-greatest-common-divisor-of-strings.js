/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 != str2 + str1) {
        return ""
    }

    let len1 = str1.length
    let len2 = str2.length

    const divisor = (len1, len2) => {
        if(!len2) {
            return len1
        }
        return divisor(len2, len1 % len2)
    }
};

gcdOfStrings("ABCABCABC","ABC")
gcdOfStrings("ABABAB","AB")
gcdOfStrings("LEET", "CODE")