/**
* Leet code problem: 
* Floyd's Tortoise and Hare algorithm to detect Cycle in a linked list
*/
const description = "user input linked list - detect a cycle using Floyd's Tortoise and Hare algorithm and return the starting point of the cycle";

const floydsAlgo = (head) => {
    let hare = head;
    let tortoise = head;
    let meetingPoint = null;
    while(tortoise && hare) {
        tortoise = tortoise.next;
        if(hare.next)
        {
            hare = hare.next.next;
        }
        else {
            return false;
        }
        if(tortoise === hare) {
            meetingPoint = tortoise; // either hare or tortoise can be called the meeting point here
            break;
        }
    }
    if(meetingPoint) {
        let currentNode = head;
        while (currentNode && meetingPoint) {
            if(currentNode === meetingPoint) {
                return currentNode; // starting point
            }
            currentNode = currentNode.next;
            meetingPoint = meetingPoint.next;
        }
    }
    return false;
}


module.exports = { description, floydsAlgo };