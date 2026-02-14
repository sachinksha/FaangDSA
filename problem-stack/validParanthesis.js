const stack = require("./stackDataStructure");
const description = "Valid Parentheses";

const isValidParanthesis = function (s) {
    const stackInstance = Object.create(stack.stackDS);
    stackInstance.init();
    
    const pairs = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === "(" || char === "{" || char === "[") {
            stackInstance.push(char);
        } else if (stackInstance.size() > 0 && stackInstance.peek() === pairs[char]) {
            stackInstance.pop();
        } else {
            return false;
        }
    }

    return stackInstance.size()  === 0;
};

module.exports = { description, isValidParanthesis };