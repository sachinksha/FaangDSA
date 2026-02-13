/**
* Leet code problem: 
* Linked list problem - reverse a given list
*/
const description = "user input linked list - reverse the list";

const reverseLinkedList = (head) => {
    let prev = null;
    let currentNode = head;
    while (currentNode) {
        let next = currentNode.next;
        currentNode.next = prev;
        prev = currentNode;
        currentNode = next;
    }
    return prev;
}

const reverseRangeOfLinkedList = (head, m, n) => {
    if ((n - m) <= 0) {
        return head;
    }
    let pos = 1;
    let currentNode = head;
    let prevNode = null;
    while (pos < m) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        pos++;
    }
    let left = prevNode;
    let mNode = currentNode;
    while (pos >= m && pos < n) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        pos++;
    }
    let nNode = currentNode;
    let right = currentNode.next;
    nNode.next = null;
    let reversedListHead = reverseLinkedList(mNode);
    if (left) {
        left.next = reversedListHead;
    }
    if (m === 1) {
        head = reversedListHead;
    }
    mNode.next = right;
    return head;
}

const makeLinkedListFromArray = (arr) => {
    let head = null;
    let tail = null;
    let i = 0;
    while (arr && i < arr.length) {
        let node = { value: arr[i], next: null }
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

module.exports = { description, reverseLinkedList, reverseRangeOfLinkedList, makeLinkedListFromArray, makeArrayFromLinkedList };