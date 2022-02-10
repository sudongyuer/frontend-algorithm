// const a = { val: 'a' };
// const b = { val: 'b' };
// const c = { val: 'c' };
// const d = { val: 'd' };
// a.next = b;
// b.next = c;
// c.next = d;

// // 遍历链表
// let p = a;
// while (p) {
//     console.log(p.val);
//     p = p.next;
// }

// // 插入
// const e = { val: 'e' };
// c.next = e;
// e.next = d;

// // 删除
// c.next = d;
var mergeTwoLists = function(l1, l2) {
    console.log(l1, l2)
};

function ListNode(val) {
    this.val = val
    this.next = null
}
ListNode.prototype.set = function(node) {
    this.next = node
}


let setListNode = function(arr) {
    if (arr.length > 0) {
        let ln = null
        // let res = null;
        while(arr.length>0) {
            let temp = new ListNode(arr.pop())
            temp.set(ln)
            ln = temp
        }
        return ln
    }
    return false

}

