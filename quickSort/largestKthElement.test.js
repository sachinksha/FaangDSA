const largestKthElement = require("./largestKthElement");

const testParams = [
    {
        "input": [4, 3, 2, 1, 6, 5],
        "k": 2,
        "result": 5
    },
    {
        "input": [500, 400, 300, 200, 100],
        "k": 3,
        "result": 300
    },
    {
        "input": [6],
        "k": 1,
        "result": 6
    }
];

test(largestKthElement.description, () => {
    for (let i = 0; i < testParams.length; i++) {
        let currentTestParams = testParams[i];
        const result = largestKthElement.getKthLargest(currentTestParams.input, currentTestParams.k);
        expect(currentTestParams.result).toEqual(result);
    }
});

