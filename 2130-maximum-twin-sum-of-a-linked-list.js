/*
    2130. Maximum Twin Sum of a Linked List
    In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

    For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.

    The twin sum is defined as the sum of a node and its twin.

    Given the head of a linked list with even length, return the maximum twin sum of the linked list.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const pairSum = function(head) {
    const arr = []
    let max = 0
    while(head != null) {
        arr.push(head.val)
        head = head.next
    }

    for(let i = 0; i < arr.length / 2; i++) {
        if (arr[i] + arr[arr.length - i - 1] > max) {
            max = arr[i] + arr[arr.length - i - 1]
        } 
    }

    return max
};