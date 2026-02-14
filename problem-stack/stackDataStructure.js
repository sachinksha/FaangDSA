/**
* Leet code problem: 
* Stack Data Structure Implementation using Array
*/
const description = "stack data structure implementation using array";

const stackDS = {
    stack: [],
    push: function (value) {
        this.stack.unshift(value);
    },
    pop: function () {
        return this.stack.shift();
    },
    peek: function () {
        return this.stack[0];
    },
    size: function () {
        return this.stack.length;
    },
    init: function () {
        this.stack = [];
    }
};

module.exports = { description, stackDS };