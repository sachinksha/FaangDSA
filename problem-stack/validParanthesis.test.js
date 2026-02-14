const paranthesis = require('./validParanthesis');

const testParams = [
    {
        "input": "()",
        "result": true
    },
    {
        "input": "()[]{}",
        "result": true
    },
    {
        "input": "(]",
        "result": false
    },
    {
        "input": "([)]",
        "result": false
    },
    {
        "input": "{[]}",
        "result": true
    }
];

test(paranthesis.description, () => {
    for (let i = 0; i < testParams.length; i++) {
        let currentTestParams = testParams[i];
        const result = paranthesis.isValidParanthesis(currentTestParams.input);
        expect(result).toEqual(currentTestParams.result);
    }
});