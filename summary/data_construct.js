// 1.数组，原生支持

// 2.Map结构， 原生支持 

// 3. 栈结构， 可以通过数组实现

// 4. 队列, 可以通过数组实现

// 5. 链表结构

// 5.1 单向链表
function ListNode(val) { // node节点
    this.val = val;
    this.next = null;
}

function createList(arr) { //创建单向链表
    let head = new ListNode(arr[0]);
    let cur = head;
    for(let i = 1; i < arr.length; i++) {
        let node = new ListNode(arr[i]);
        cur.next = node;
        cur = cur.next;
    }
    return head;
}

// 5.2 双向链表

