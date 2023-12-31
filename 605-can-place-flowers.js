/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function(flowerbed, n) {
    // 1. every new flower needs three zeros in a row to not have adjacent flowers
    // 2. loop through the flowerbed array and find a place to put the flower
    if(n == 0) {
        return true
    }
    for(const [index, value] of flowerbed.entries()) {

        // sanity check (index-1 > 0 or not necessary OR index+1 < flowerbed.length or not necessary )
        let leftSideCheck = false
        let rightSideCheck = false
        if(value == 0) {
            if(index - 1 < 0) {
                leftSideCheck = true
            } else if (flowerbed[index - 1] == 0) {
                leftSideCheck = true
            }

            if(index + 1 > flowerbed.length - 1) {
                rightSideCheck = true
            } else if( flowerbed[index + 1] == 0) {
                rightSideCheck = true
            } 

            if (leftSideCheck && rightSideCheck) {
                flowerbed[index] = 1
                n--
            }
        }


        if(n == 0) {
            return true
        }
    }

    return false
    // 3. if at the end of flowerbed with n > 0 then false, else if n = 0 then true
};

console.log(canPlaceFlowers([1,0,0,0,1], 1))
console.log(canPlaceFlowers([1,0,0,0,1], 2))