const paranthesis = require('./validStringWithParanthesis');

const testParams = [
    {
        "input": "()",
        "result": "()"
    },
    {
        "input": "",
        "result": ""
    },
    {
        "input": "(",
        "result": ""
    },
    {
        "input": ")))",
        "result": ""
    },
    {
        "input": "a)bc(d)",
        "result": "abc(d)"
    },
    {
        "input": "(abc(d)e",
        "result": "abc(d)e"
    }
];

test(paranthesis.description, () => {
    for (let i = 0; i < testParams.length; i++) {
        let currentTestParams = testParams[i];
        const result = paranthesis.getCleanStringWithParanthesis(currentTestParams.input);
        expect(result).toEqual(currentTestParams.result);
    }
});