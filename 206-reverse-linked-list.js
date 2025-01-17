/*
    206. Reverse Linked List
    Given the head of a singly linked list, reverse the list, and return the reversed list.
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
    let curr = head
    let prev = null
    let next = null 
    // 1,2,3,4,5
    while(curr != null) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
};