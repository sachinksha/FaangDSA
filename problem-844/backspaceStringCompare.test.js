const backspaceComparison = require("./backspaceStringCompare");

const testParams = [
    {
        "input1": "aaa#z",
        "input2": "aab#z",
        "result": true
    },
    {
        "input1": "aaa###z",
        "input2": "aab#z",
        "result": false
    },
    {
        "input1": "aaa#Z",
        "input2": "aab#z",
        "result": false
    },
    {
        "input1": "aaa33##asdas2##z",
        "input2": "aaaasdaz",
        "result": true
    },
    {
        "input1": "bxj##tw",
        "input2": "bxj###tw",
        "result": false
    },
    {
        "input1": "xywrrmp",
        "input2": "xywrrmu#p",
        "result": true
    },
    {
        "input1": "bxj##tw",
        "input2": "bx0#j##tw",
        "result": true
    }];
test(backspaceComparison.description, () => {
    for(let i=0;i<testParams.length;i++) {
        let currentTestParams = testParams[i];
        expect(backspaceComparison.bruteforce_compareStringsWithBackspaceHashChar(currentTestParams.input1, currentTestParams.input2)).toStrictEqual(currentTestParams.result);
    }
});

test(backspaceComparison.description, () => {
    for(let i=0;i<testParams.length;i++) {
        let currentTestParams = testParams[i];
        expect(backspaceComparison.optimal_compareStringsWithBackspaceHashChar(currentTestParams.input1, currentTestParams.input2)).toStrictEqual(currentTestParams.result);
    }
});