const queue = require("./queueUsingStacks");

const testParams = [
    {
        input: [1, 2, 3],
        peek: 1,
        size: 3
    },
    {
        input: [10, 20, 30, 40],
        peek: 10,
        size: 4
    },
    {
        input: [5, 15],
        peek: 5,
        size: 2
    }   
];


test(queue.description, () => {
    for (let i = 0; i < testParams.length; i++) {
        let currentTestParams = testParams[i];
        const queueInstance = Object.create(queue.Queue);
        queueInstance.init();
        currentTestParams.input.forEach(value => {
            queueInstance.enqueue(value);
        });
        expect(queueInstance.peek()).toEqual(currentTestParams.peek);
        expect(queueInstance.empty()).toEqual(false);
        expect(queueInstance.size()).toEqual(currentTestParams.size);
    }
});

