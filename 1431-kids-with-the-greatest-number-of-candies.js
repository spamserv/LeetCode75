/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function(candies, extraCandies) {
    // 1. find kid with most candies
    const maxCandies = Math.max(...candies)

    // 2. iterate through candies array and check if adding extraCandies is greater than that value
    const results = []
    for(numberOfCandies of candies) {
        if(maxCandies > (numberOfCandies + extraCandies)) {
            results.push(false)
        } else {
            results.push(true)
        }
    }

    return results
};

console.log(kidsWithCandies([2,3,5,1,3], 3))
console.log(kidsWithCandies([4,2,1,1,2], 1))
console.log(kidsWithCandies([12,1,12], 10))