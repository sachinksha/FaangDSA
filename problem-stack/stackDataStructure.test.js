const stack = require("./stackDataStructure");

const testPopParams = [
    {
        "input": [],
        "result": undefined,
        "size": 0
    },
    {
        "input": [200, 300, 400, 500],
        "result": 500,
        "size": 3
    },
    {
        "input": [6],
        "result": 6,
        "size": 0
    },
    {
        "input": [1, 2, 3],
        "result": 3,
        "size": 2
    }
];

const testPushParams = [
    {
        "input1": [1, 2, 3, 4, 5, 6, 7],
        "input2": 8,
        "result": [8, 7, 6, 5, 4, 3, 2, 1],
        "size": 8
    },
    {
        "input1": [200, 300, 400, 500],
        "input2": 600,
        "result": [600, 500, 400, 300, 200],
        "size": 5
    },
    {
        "input1": [],
        "input2": 100,
        "result": [100],
        "size": 1
    }
];

const testPeekParams = [
    {
        "input": [],
        "result": undefined
    },
    {
        "input": [200, 300, 400, 500],
        "result": 500
    },
    {
        "input": [6],
        "result": 6
    },
    {
        "input": [1, 2, 3],
        "result": 3
    }
];

test(stack.description, () => {
    for (let i = 0; i < testPushParams.length; i++) {
        let currentTestParams = testPushParams[i];
        const stackInstance = Object.create(stack.stackDS);
        stackInstance.init();
        currentTestParams.input1.forEach(value => {
            stackInstance.push(value);
        });
        stackInstance.push(currentTestParams.input2);
        expect(stackInstance.stack).toEqual(currentTestParams.result);
        expect(stackInstance.size()).toEqual(currentTestParams.size);
    }
});

test(stack.description, () => {
    for (let i = 0; i < testPopParams.length; i++) {
        let currentTestParams = testPopParams[i];
        const stackInstance = Object.create(stack.stackDS);
        stackInstance.init();
        currentTestParams.input.forEach(value => {
            stackInstance.push(value);
        });
        const poppedValue = stackInstance.pop();
        expect(poppedValue).toEqual(currentTestParams.result);
        expect(stackInstance.size()).toEqual(currentTestParams.size);
    }
});

test(stack.description, () => {
    for (let i = 0; i < testPeekParams.length; i++) {
        let currentTestParams = testPeekParams[i];
        const stackInstance = Object.create(stack.stackDS);
        stackInstance.init();
        currentTestParams.input.forEach(value => {
            stackInstance.push(value);
        });
        expect(stackInstance.peek()).toEqual(currentTestParams.result);
    }
});

