const findTwoSum = require("./findTwoSum");

const testParams = [
    {
    "input": [1, 3, 7, 9, 2],
    "target": 11,
    "result": [3,4]
    },{
    "input": [],
    "target": 11,
    "result": undefined
}, {
    "input": [11],
    "target": 11,
    "result": undefined
}
    , {
    "input": [1],
    "target": 11,
    "result": undefined
}
    , {
    "input": [5, 6],
    "target": 11,
    "result": [0, 1]
}
    , {
    "input": [3, 2, 4],
    "target": 6,
    "result": [1, 2]
},
];
test(findTwoSum.description, () => {
    for(let i=0;i<testParams.length;i++) {
        let currentTestParams = testParams[i];
        expect(findTwoSum.bruteForceFindTwoSum(currentTestParams.input, currentTestParams.target)).toStrictEqual(currentTestParams.result);
    }
});
test(findTwoSum.description, () => {
    for(let i=0;i<testParams.length;i++) {
        let currentTestParams = testParams[i];
        expect(findTwoSum.optimizedFindTwoSum(currentTestParams.input, currentTestParams.target)).toStrictEqual(currentTestParams.result);
    }
});
test(findTwoSum.description, () => {
    for(let i=0;i<testParams.length;i++) {
        let currentTestParams = testParams[i];
        expect(findTwoSum.findTwoSum(currentTestParams.input, currentTestParams.target)).toStrictEqual(currentTestParams.result);
    }
});