/**
* Leet code problem: 
* Doubly Linked list problem - flatten a given douobly linked list
*/
const description = `user input doubly linked list with child nodes 
that are doubly linked lists - flatten a doubly linked list`;

const flattenDoublyLinkedList = (head) => {
    let currentNode = head;
    while(currentNode) {
        if(currentNode.child) {
            let childListHead = flattenDoublyLinkedList(currentNode.child);
            currentNode.child = null;
            childListHead.prev = currentNode;
            let currChild = childListHead;
            while(currChild) {
                if(!currChild.next){
                    currChild.next = currentNode.next;
                    currentNode.next = childListHead;
                    if(currentNode.next) {
                        currentNode.next.prev = currChild;
                    }
                    break;
                }
                currChild = currChild.next;
            }
        }
        currentNode = currentNode.next;
    }
    return head;
}


const makeLinkedListFromArray = (arr) => {
    let head = null;
    let tail = null;
    let i = 0;
    while (arr && i < arr.length) {
        let nodeInfo = arr[i];
        let childNodes = null;
        if(nodeInfo.child){
            childNodes = makeLinkedListFromArray(nodeInfo.child);
        }
        let node = { value: nodeInfo.value, child: childNodes, prev:tail, next: null }
        if (!head) {
            head = node;
        }
        if (tail) {
            tail.next = node;
        }
        tail = node;
        i++
    }
    return head;
}

const makeArrayFromLinkedList = (head) => {
    let arr = [];
    let currentNode = head;
    while (currentNode) {
        arr.push(currentNode.value);
        currentNode = currentNode.next;
    }
    return arr;
}

module.exports = { description, flattenDoublyLinkedList, makeLinkedListFromArray, makeArrayFromLinkedList };