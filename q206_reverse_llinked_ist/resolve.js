/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head || !head.next) return head;
    let cur = head, nodeArray = [];
    while(cur) {
        nodeArray.push(cur);
        cur = cur.next;
    }
    let len = nodeArray.length, newListHead = nodeArray[len-1]; 
    nodeArray[0].next = null;
    cur = newListHead;
    for(let i = nodeArray.length-2; i>=0; i--) {
        cur.next = nodeArray[i];
        cur = cur.next;
    }
    return newListHead;
};