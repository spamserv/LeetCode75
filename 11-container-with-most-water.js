/*
11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {

    let maxArea = 0
    let leftSide = 0
    let rightSide = height.length

    // loop while left side index is lesser than right side index
    while(leftSide < rightSide) {
        const rectWidth = rightSide - leftSide
        let rectHeight = 0

        // if value of the leftSide index is lesser, store it as the current (smaller) height and increase the index
        if(height[leftSide] < height[rightSide]) {
            rectHeight = height[leftSide]
            leftSide++

        //  do the same for right side index but decrease the index
        } else {
            rectHeight = height[rightSide]
            rightSide--
        }

        // calculate area
        const area = rectHeight * rectWidth

        // if area is greater than current maxArea, store it
        if(area > maxArea) {
            maxArea = area
        }
    }

    return maxArea
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,1]))