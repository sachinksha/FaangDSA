/**
* Leet code problem: 
* Floyd's Tortoise and Hare algorithm to detect Cycle in a linked list
*/
const description = "user input linked list - detect a cycle using Floyd's Tortoise and Hare algorithm and return the starting point of the cycle";

const floydsAlgo = (head) => {
    let tortoise = head;
    let hare = head;
    let meetingPoint = null;
    while(hare && tortoise) {
        hare = hare.next;
        if(tortoise.next)
        {
            tortoise = tortoise.next.next;
        }
        else {
            return false;
        }
        if(hare === tortoise) {
            meetingPoint = hare; // either hare or tortoise can be called the meeting point here
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