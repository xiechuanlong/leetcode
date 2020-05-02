/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 变为一个循环列表,相对于头结点像左移数,变换为又移数
var rotateRight = function(head, k) {
    if(!k || !head) {
        return head;
    }
    let cur = head, len=1, mov;
    while(cur.next) {
        len++;
        cur = cur.next;
    }
    movRight = len - k%len;

    cur.next = head;
    cur = head;
    for(let i = 1; i<movRight; i++) {
        cur = cur.next;
    }
    head = cur.next;
    cur.next = null;
    return head;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}
function createList(arr) {
    let head = new ListNode(arr[0]);
    let cur = head;
    for(let i = 1; i < arr.length; i++) {
        let node = new ListNode(arr[i]);
        cur.next = node;
        cur = cur.next;
    }
    return head;
}
let head = createList([1,2,3,4,5]);
rotateRight(head, 2)