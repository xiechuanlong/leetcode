/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head) return head;
    let dummy =  new Node(0, null, null), nodeListMap = new Map(), cur = head, dummyCur = dummy;
    while(cur) { // next指针遍历
        let node, radomNode;
        if(nodeListMap.has(cur)) {
            node = nodeListMap.get(cur)
        } else {
            node = new Node(cur.val, null, null);
            nodeListMap.set(cur, node);
        }
        if(cur.random && !nodeListMap.has(cur.random)) {
            radomNode = new Node(cur.random.val, null, null);
            nodeListMap.set(cur.random, radomNode);
            node.random = radomNode;
        } else if(cur.random ) {
            node.random = nodeListMap.get(cur.random)
        }
        dummyCur.next = node;
        dummyCur = node;
        cur = cur.next
    }
    return dummy.next;
};

function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};
    
function createList(arr) {
    let dummy = new Node(0, null, null);
    let cur = dummy;
    let nodeIndexMap = new Map();
    for(let i = 0; i < arr.length; i++) {
        let node = new Node(arr[i][0], null, null);
        nodeIndexMap.set(i, node);
        cur.next = node;
        cur = cur.next;
    }
    cur = dummy.next;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i][1] === null) {
            cur.random = null
        } else {
            cur.random = nodeIndexMap.get(arr[i][1])
        }
        cur = cur.next;
    }
    return dummy.next;
}
let head = createList([[7,null],[13,0],[11,4],[10,2],[1,0]]);

console.log(copyRandomList(head))