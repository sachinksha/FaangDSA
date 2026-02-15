/**
* Leet code problem: 
* Implement Queue using Stacks
*/
const description = "Queue using Stacks";

const Queue = {
    in:  [],
    out: [],
    init() { 
        // Initialize the in and out stacks. 
        // Added because we are using Object.create to create new instances of Queue, 
        // and we want to ensure that each instance has its own separate stacks.
        this.in = [];
        this.out = [];   
    },
    enqueue(value) {
        this.in.push(value);
    },
    dequeue() {
        if (this.out.length === 0) {
            while (this.in.length > 0) {
                this.out.push(this.in.pop());
            }
        }
        return this.out.pop();
    },
    peek() {
        if (this.out.length === 0) {
            while (this.in.length > 0) {
                this.out.push(this.in.pop());
            }
        }
        return this.out[this.out.length - 1];
    },
    empty() {
        return this.in.length === 0 && this.out.length === 0;
    },
    size() {
        return this.in.length + this.out.length;
    }
};

module.exports = { description, Queue };