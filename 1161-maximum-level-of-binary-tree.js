/*
Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.
Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

Example 1:
Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.

Example 2:
Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
Output: 2

*/

const maxLevelSum = function(root) {
    const sum = []
    let level = 0

    const traverse = function(node, level) {
        if(node === null) {
            return
        }
        
        if(sum[level] === undefined) {
            sum[level] = node.val
        } else {
            sum[level] += node.val
        }

        traverse(node.left, level+1)
        traverse(node.right, level+1)
    }

    const findMin = function() {
        let max = sum[0]
        let maxLevel = 1
        for(let i = 0; i < sum.length; i++) {
            if(max < sum[i]) {
                max = sum[i]
                maxLevel = i + 1
            }
        }
        return maxLevel
    }

    traverse(root, level)
    return findMin()
};