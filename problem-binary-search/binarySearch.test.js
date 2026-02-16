const binarySearch = require('./binarySearch').binarySearch;

const testParams = [
    {
        "input": [1, 2, 3, 4, 5, 6],
        "target": 4,
        "result": 3
    },
    {
        "input": [100, 200, 300, 400, 500],
        "target": 300,
        "result": 2
    },
    {
        "input": [6],
        "target": 6,
        "result": 0
    },
    {
        "input": [1, 2, 3, 4, 5],
        "target": 10,
        "result": -1
    }
];

test("Binary Search - " + binarySearch.description, () => {
    for (let i = 0; i < testParams.length; i++) {
        let currentTestParams = testParams[i];
        const result = binarySearch(currentTestParams.input, currentTestParams.target);
        expect(currentTestParams.result).toEqual(result);
    }
});