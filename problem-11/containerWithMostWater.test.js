const getContainerWithMostWater = require("./containerWithMostWater");

const testParams = [
    {
        "input": [4, 8, 1, 2, 3, 9],
        "result": 32
    },
    {
        "input": [1, 7, 2, 0, 1, 3],
        "result": 12
    },
    {
        "input": [1, 7, 2, 8, 1, 6],
        "result": 24
    },
    {
        "input": [7, 1, 2, 3, 9],
        "result": 28
    }, {
        "input": [6, 9, 3, 4, 5, 8],
        "result": 32
    }, {
        "input": [1, 8, 8, 2, 9, 4],
        "result": 24
    }];

test(getContainerWithMostWater.description, () => {
    for(let i=0;i<testParams.length;i++) {
        let currentTestParams = testParams[i];
        expect(getContainerWithMostWater.getContainerWithMostWater(currentTestParams.input)).toStrictEqual(currentTestParams.result);
    }
});