/*
735. Asteroid Collision

We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
 

Constraints:

2 <= asteroids.length <= 104
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0
*/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = function(asteroids) {
    let finalAsteroids = []
    let moveToLeft = false
    let possibleCollision = false

    // Loop through asteroids
    for(let i = 0; i < asteroids.length; i++) {
        // Check if the current asteroids moves left or right
        moveToLeft = asteroids[i] < 0 ? true : false

        // If it moves to the right, add it to the finalAsteroids array
        if(!moveToLeft) {
            finalAsteroids.push(asteroids[i])
        }

        // While the current asteroids moves to the left
        while(moveToLeft) {

            // Check if there it is the first in the list, if it is, add it to the finalAsteroids array and 
            // set moveToLeft to false, because there is nothing to compare it to
            if(finalAsteroids.length == 0) {
                finalAsteroids.push(asteroids[i])
                moveToLeft = false
                break
            }

            // Check if there is a possible collision between current and previous asteroid
            possibleCollision = finalAsteroids[finalAsteroids.length - 1] > 0 ? true : false
            if(!possibleCollision) {
                // If they are both moving in the same direction, push the asteroid into finalAsteroids array
                finalAsteroids.push(asteroids[i])
                moveToLeft = false
                break
            }

            // If the previous asteroid moves to the right (current is moving to the left), and the current asteroid is bigger than previous, destroy the previous from the array
            if(finalAsteroids[finalAsteroids.length - 1] > 0 && Math.abs(asteroids[i]) > Math.abs(finalAsteroids[finalAsteroids.length - 1])) {
                finalAsteroids.pop()
            // If the previous asteroid moves to the right (current is moving to the left), and the previous asteroid is bigger than current, destroy the current
            } else if(finalAsteroids[finalAsteroids.length - 1] > 0 && Math.abs(asteroids[i]) < Math.abs(finalAsteroids[finalAsteroids.length - 1])) {
                moveToLeft = false
            // If both asteroids are the same, but opposite direction, destroy both
            } else {
                finalAsteroids.pop()
                moveToLeft = false
            }
        }

        // Check if last asteroid needs to be added to the array
        if(moveToLeft && i == asteroids.length - 1) {
            finalAsteroids.push(asteroids[i])
        }
    }
    return finalAsteroids
};
console.log(asteroidCollision([5,10,-5])) // [5,10]
console.log(asteroidCollision([8,-8])) // []
console.log(asteroidCollision([10,2,-5])) // [10]
console.log(asteroidCollision([-2,-1,1,2])) // [-2,-1,1,2]
console.log(asteroidCollision([-2,-2,1,-2])) // [[-2,-2,-2]]