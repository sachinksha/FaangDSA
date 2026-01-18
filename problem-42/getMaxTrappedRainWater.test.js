const getMaxTrappedRainWater = require("./getTotalTrappedRainWater");

const testParams = [
    {
        "input": [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2],
        "result": 8
    },
    {
        "input": [0, 2, 4, 3, 2, 1, 0, 1, 2, 3, 2],
        "result": 9
    },
    {
        "input": [0, 2, 4, 3, 4, 1, 5, 1, 2, 3, 2],
        "result": 7
    }];

test(getMaxTrappedRainWater.description, () => {
    for (let i = 0; i < testParams.length; i++) {
        let currentTestParams = testParams[i];
        expect(getMaxTrappedRainWater.bruteForce_getMaxTrappedRainWater(currentTestParams.input)).toStrictEqual(currentTestParams.result);
    }
});

test(getMaxTrappedRainWater.description, () => {
    for (let i = 0; i < testParams.length; i++) {
        let currentTestParams = testParams[i];
        expect(getMaxTrappedRainWater.twoPointer_getMaxTrappedRainWater(currentTestParams.input)).toStrictEqual(currentTestParams.result);
    }
});