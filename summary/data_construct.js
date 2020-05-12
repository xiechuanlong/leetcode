// 1.数组，原生支持

// 2.Map结构， 原生支持 

/* 
* 3. 栈结构， 可以通过数组实现
* 入栈 push()
* 出栈 pop()
* 是否空栈 isEmpty()
* 清空 clear()
* 获取栈顶元素 peek()
* 栈大小 length
*/

const Stack = (function(){
    let items = [];
    class Stack {
        push(data) {
            items.push(data);
        }
    
        pop() {
            return items.pop();
        }
    
        peek() {
            return items[items.length -1];
        }
    
        isEmpty() {
            return items.length === 0;
        }
    
        clear() {
            items = [];
        }

        print() {
            console.log(items.join('<--'))
        }
        get items() {
            return items;
        }

        get length() {
            return items.length;
        }
    }
    return Stack;
})();
/* 
* 4. 队列, 可以通过数组实现
*
* 入队 push()
* 出队 pop()
* 获取队首元素 front()
* 获取队尾元素 back()
* 是否空栈 isEmpty()
* 清空 clear()
* 队列大小 length
*/

const Queue = (function() {
    let items = [];
    class Queue {
        constructor(){
            items = [];
        }
    
        enqueue(data) {
            items.push(data);
        }
    
        dequeue() {
            return items.shift()
        }
    
        front() {
            return items[0];
        }
    
        back() {
            return items[this.length-1];
        }
    
        isEmpty() {
            return size == 0;
        }
    
        clear() {
            items = [];
        }
    
        print() {
            console.log(items.join('<---'));
        }
        
        get items() {
            return items;
        }

        get length() {
            return items.length;
        }
    }
    return Queue;
})();

/* 
*  5. 单向链表结构
*  链表长度 length
*  尾部增加node节点 push()
*  删除指定index的节点 delete(index)
*  指定节点index后添加节点 add(index)
*  返回指定index处的节点 get(index)
*  链表是否为空 isEmpty()
*  print 打印链表节点
*/

const LinkedList = (function() {
    class Node { // node节点
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }
    
    let head = null, tail = null, length = 0;
    class LinkedList {
        push(data) { //尾部添加节点
            let node = new Node(data);
            if(head == null) {
                head = node;
                tail = node;
            } else {
                tail.next = node;
                tail = node;
            }
            length++
        }
    
        pop() { //尾部删除节点
            return this.delete(length-1);
        }
    
        get(index) {
            let currentNode = head, currentIndex=0;
            if(index < 0 || index > length) { //无效
                return null;
            }
            while(currentIndex<index) {
                currentIndex++
                currentNode = currentNode.next;
            }
            return currentNode;
        }

        add(index, data) { //插入元素， 该元素为第index个(0-length)
            let node = new Node(data);
            if(index < 0 || index > length) { //无效
                return null;
            }

            if(index==0) {
                node.next = head;
                head = node;
                length==0 && (tail = node); //只有一个节点
                length++;
                return;
            }

            if(index==length) {
                this.push(data);
                return;
            }
            if(index>0 && index<length) {
                let preNode = this.get(index-1);
                node.next = preNode.next;
                preNode.next = node;
                length++;
            }
        }

        delete(index) {
            if(index==0) { //删除头结点
                if(length==1) { //只有一个节点情况
                    tail = null;
                }
                let node = head;
                head = head.next
                length--
                return node;
            }
            if(index< 0 || index >= length) {
                return null;
            }
            // currentNode 为indnex-1的节点
            let preNode = this.get(index-1);
            //删除的是尾节点
            if(index == length-1) {
                tail = preNode;
            }
            let node = preNode.next;
            preNode.next = preNode.next.next;
            length--;
            return node;
        }
    
        isEmpty() {
            return length===0
        }
    
        clear() {
            head = null;
            tail = null;
            length = 0;
        }
    
        print() {
            let currentNode =head;
            let list = [];
            while(currentNode) {
                list.push(currentNode.data);
                currentNode = currentNode.next;
            }
            console.log(list.join('=>'))
        }

        get length() {
            return length;
        }

        get head() {
            return head;
        }

        get tail() {
            return tail;
        }
    }
    return LinkedList;
})();

// 5.2 双向链表



