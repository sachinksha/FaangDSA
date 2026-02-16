const description = "Get max depth of a binary tree"
const binaryTreeDepth = (node) => {
    if(!node) {
        return 0;
    }
    let leftDepth = binaryTreeDepth(node.left);
    let rightDepth = binaryTreeDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}
module.exports = {description, binaryTreeDepth};