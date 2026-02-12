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

const makeLinkedListFromArray = (arr) => {
    let head = null;
    let i = 0;
    while(i<arr.length) {
        let node = {value: arr[i], next: head}
        head = node;
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

module.exports = {description, reverseLinkedList, makeLinkedListFromArray, makeArrayFromLinkedList};