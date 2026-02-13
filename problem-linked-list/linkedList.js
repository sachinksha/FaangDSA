/**
* Leet code problem: 
* Linked list problem - reverse a given list
*/
const description = "user input linked list - reverse the list";

const reverseLinkedList = (head) => {
    let prev = null;
    let currentNode = head;
    while(currentNode) {
        let next = currentNode.next;
        currentNode.next = prev;
        prev = currentNode;
        currentNode = next;
    }
    return prev;
}

const reverseRangeOfLinkedList = (head, m, n) => {
    return reverseLinkedList(head);
}

const makeLinkedListFromArray = (arr) => {
    let head = null;
    let tail = null;
    let i = 0;
    while(i<arr.length) {
        let node = {value: arr[i], next: null}
        if(!head){
            head = node;
        }
        if(tail) {
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
    while(currentNode) {
        arr.push(currentNode.value);
        currentNode = currentNode.next;
    }
    return arr;
}

module.exports = {description, reverseLinkedList, reverseRangeOfLinkedList, makeLinkedListFromArray, makeArrayFromLinkedList};