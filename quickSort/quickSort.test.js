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

test(quickSort.description, () => {
    for (let i = 0; i < testParams.length; i++) {
        let currentTestParams = testParams[i];
        const resultArray = quickSort.quickSort(currentTestParams.input);
        expect(currentTestParams.result).toEqual(resultArray);
    }
});

