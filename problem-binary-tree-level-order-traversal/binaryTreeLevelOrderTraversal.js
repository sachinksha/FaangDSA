const description = "Get level order traversal of a binary tree as a list of lists of node values at each level.";
const getLevelOrderTraversal = (node) => {
    if(!node) {
        return [];
    }
    let result = [];
    let queue = [node];
    while(queue.length > 0) {
        let currentLevelSize = queue.length;
        let currentLevelNodes = [];
        for(let i = 0; i < currentLevelSize; i++) {
            let currentNode = queue.shift();
            if((currentNode && currentNode.value)){
                currentLevelNodes.push(currentNode.value);
            }
            if(currentNode.left) {
                queue.push(currentNode.left);
            }
            if(currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        if(currentLevelNodes.length > 0) { 
            result.push(currentLevelNodes);
        }
    }
    return result;
}
module.exports = {description, getLevelOrderTraversal};