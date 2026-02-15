const stack = require("./stackDataStructure");
const description = "Valid string with parentheses - clean the string by removing the minimum number of parentheses to make the input string valid.";

const getCleanStringWithParanthesis = function (s) {
    const stackInstance = Object.create(stack.stackDS);
    stackInstance.init();
    
    let outputString = "";
    for (let i = 0; i < s.length; i++) {
        let currentChar = s[i];
        if (currentChar === '(') {
            stackInstance.push(i);
            outputString += currentChar;
        } else if (currentChar === ')') {
            if (stackInstance.size() > 0) {
                stackInstance.pop();
                outputString += currentChar;
            }
        }
        else {
            outputString += currentChar;
        }
    }
    let stackSize = stackInstance.size();
    for (let i = 0; i < stackSize; i++) {
        let currentIndex = stackInstance.pop();
        outputString = outputString.substring(0, currentIndex) + outputString.substring(currentIndex + 1);
    }
    return outputString;
};

module.exports = { description, getCleanStringWithParanthesis };