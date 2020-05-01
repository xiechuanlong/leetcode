/**
  * 思路： 
  * 1. 找到倒数第N个节点，推算出顺序的节点
  * 2. 删除该节点
  * 3. 考虑存在的边界条件
  */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// 只有一个节点已经删除的就是第一个节点边界情况， 通过增加一个哑节点避免
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let len = 0;
    let curList = dummy;
    while(curList) {
        len++;
        curList = curList.next;
    }
    curList = dummy;
    let rmIndex = len - n + 1, curIndex = 1; //获取删除节点的索引
    while(curIndex < rmIndex-1) {
        curIndex++;
        curList = curList.next; //获取删除的前一个节点
    }
    curList.next = curList.next.next;
    return dummy.next;
};

// 双指针法，假设整个长度len, front移动len - 1,  backend应该是移动len - n -1 + 1（删除节点前一个）， 移动相差n-1个
var removeNthFromEnd2 = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let front = dummy, backend = dummy;
    let step = 0; //节点移动个数
    while(front) {
        step++;
        front = front.next;
        if(step>n+1) { //front移动n+2, backend移动n+1
            backend = backend.next;
        }
    }
    backend.next = backend.next.next;
    return dummy.next;
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
removeNthFromEnd2(head, 2)
