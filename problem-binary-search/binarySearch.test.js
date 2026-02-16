const { binarySearchRange, binarySearchRangeByInices } = require('./binarySearch');

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


const testRangeParams = [
    {
        "input": [1, 2, 3, 3, 4, 4, 4, 5, 6],
        "target": 4,
        "result": [4, 6]
    },
    {
        "input": [100, 100, 200, 300, 400, 500],
        "target": 100,
        "result": [0, 1]
    },
    {
        "input": [6],
        "target": 6,
        "result": [0, 0]
    },
    {
        "input": [1, 2, 3, 4, 5],
        "target": 10,
        "result": [-1, -1]
    }
];

test("Binary Search - " + binarySearch.description, () => {
    for (let i = 0; i < testParams.length; i++) {
        let currentTestParams = testParams[i];
        const result = binarySearch(currentTestParams.input, 0, currentTestParams.input.length-1,currentTestParams.target);
        expect(currentTestParams.result).toEqual(result);
    }
});

test("Binary Search Range using Linear search as secondary search; - " + binarySearch.description, () => {
    for (let i = 0; i < testRangeParams.length; i++) {
        let currentTestParams = testRangeParams[i];
        const result = binarySearchRange(currentTestParams.input, currentTestParams.target);
        expect(currentTestParams.result).toEqual(result);
    }
});

test("Binary Search Range using Binary search again for secondary search - " + binarySearch.description, () => {
    for (let i = 0; i < testRangeParams.length; i++) {
        let currentTestParams = testRangeParams[i];
        const result = binarySearchRangeByInices(currentTestParams.input, 0, currentTestParams.input.length-1, currentTestParams.target);
        expect(currentTestParams.result).toEqual(result);
    }
});