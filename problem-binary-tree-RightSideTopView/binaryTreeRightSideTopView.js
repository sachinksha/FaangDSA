const description = 'Get level array of nodes in a binary tree when it is viewed from the right side. The right side view of a binary tree is the set of nodes visible when the tree is viewed from the right side. The right side view of a binary tree contains all nodes that are the last nodes in their levels. For example, if there are two nodes at the same level, only the rightmost node will be visible in the right side view. If there is only one node at a level, then that node will be visible in the right side view.';
const getRightSideView = (node) => {
    if(!node) {
        return [];
    }
    let result = [];
    let queue = [node];
    while(queue.length > 0) {
        let currentLevelSize = queue.length;
        let currentLevelTopRightNode = -1;
        for(let i = 0; i < currentLevelSize; i++) {
            let currentNode = queue.shift();
            if(currentNode && currentNode.value && currentLevelTopRightNode === -1){
                currentLevelTopRightNode = currentNode.value;
            }
            if(currentNode.right) {
                queue.push(currentNode.right);
            }
            if(currentNode.left) {
                queue.push(currentNode.left);
            }
        }
        if(currentLevelTopRightNode !== -1) { 
            result.push(currentLevelTopRightNode);
        }
    }
    return result;
}
module.exports = {description, getRightSideView};