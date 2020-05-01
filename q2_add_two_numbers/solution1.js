/**
 * 1. 链表1，2从头相加，直到有一个为空
 * 2. 再处理为空的链表相加情况
 */

 // 定义链表节点
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0); //结果
    let curList = head;
    let over = 0; //相加进位
    while(l1 && l2) {
        let i = l1.val, j = l2.val;
        let res = i + j + over;
        if(res>= 10) {
            res = res - 10;
            curList.next = new ListNode(res)
            over = 1;
        } else {
            over = 0; // 每一轮都是要处理的
            curList.next = new ListNode(res)
        }
        curList = curList.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    let l = l1?l1:l2;
    if(l) {
        while(l) { // 两边长度不一致还要做一轮逻辑， 可以优化
            let a = l.val + over;
            if(a >=10) {
                over = 1;
                curList.next = new ListNode(a - 10);
                curList = curList.next ;
                l = l.next;
            } else {
                over = 0;
                l.val = a;
                curList.next = l;
                break;
            }
        }
        if(over) {
            curList.next = new ListNode(over);
        }
    } else if(over){ //要判断两个一样长度， 但是最后相加有进位情况
        curList.next = new ListNode(over);
    }
    return head.next;
};

// test (2 -> 4 -> 3) + (5 -> 6 -> 4)
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
// let l1 = createList([9,9]);
// let l2 =  createList([1]);

// console.log(addTwoNumbers(l1,l2))

// 优化

var addTwoNumbers2 = function(l1, l2) {
    let head = new ListNode(0); //结果
    let curList = head;
    let over = 0; //相加进位
    while(l1||l2) { //两个都为null时就结束
        // 为null的那个默认val为0, 使得两者始终一样长
        if(!l1) {
            l1 = new ListNode(0);
        }
        if(!l2) {
            l2 = new ListNode(0);
        }

        let sum =  l1.val + l2.val + over;
        curList.next = new ListNode(sum%10);
        over = sum>=10?1:0

        curList = curList.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    // l1,l2为null了， 但是over还有进位
    if(over) {
        curList.next = new ListNode(over);
    }
    return head.next;
};
let l1 = createList([2,4,3]);
let l2 =  createList([5,6,4]);

console.log(addTwoNumbers2(l1,l2))