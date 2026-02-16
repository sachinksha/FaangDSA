const quickSort = require("./quickSort");

const testParams = [
    {
        "input": [4, 3, 2, 1, 6, 5],
        "result": [1, 2, 3, 4, 5, 6]
    },
    {
        "input": [500, 400, 300, 200, 100],
        "result": [100, 200, 300, 400, 500]
    },
    {
        "input": [6],
        "result": [6]
    },
    {
        "input": [],
        "result": []
    }
];

const testParamsQuickSelect = [
    {
        "input1": [4, 3, 2, 1, 6, 5],
        "input2": 2,
        "result": 3
    },
    {
        "input1": [500, 400, 300, 200, 100],
        "input2": 4,
        "result": 500
    },
    {
        "input1": [6],
        "input2": 0,
        "result": 6
    },
    {
        "input1": [5, 3, 1, 2, 4],
        "input2": 3,
        "result": 4
    }
];

test("Quick Select - " + quickSort.description, () => {
    for (let i = 0; i < testParamsQuickSelect.length; i++) {
        let currentTestParams = testParamsQuickSelect[i];
        const resultArray = quickSort.quickSelect(currentTestParams.input1, 0, currentTestParams.input1.length - 1, currentTestParams.input2);
        expect(currentTestParams.result).toEqual(resultArray);
    }
});

test(quickSort.description, () => {
    for (let i = 0; i < testParams.length; i++) {
        let currentTestParams = testParams[i];
        const resultArray = quickSort.quickSort(currentTestParams.input);
        expect(currentTestParams.result).toEqual(resultArray);
    }
});

test("Quick Sort - in place " + quickSort.description, () => {
    for (let i = 0; i < testParams.length; i++) {
        let currentTestParams = testParams[i];
        const resultArray = quickSort.quickSortInPlace(currentTestParams.input);
        expect(currentTestParams.result).toEqual(resultArray);
    }
});
