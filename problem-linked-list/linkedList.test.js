const linkedList = require("./linkedList");

const testParams = [
    {
        "input": [1, 2, 3, 4, 5, 6],
        "result": [6, 5, 4, 3, 2, 1]
    },
    {
        "input": [200, 300, 400, 500],
        "result": [500, 400, 300, 200]
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

const testParamsReverseRange = [
    {
        "input1": [1, 2, 3, 4, 5, 6, 7],
        "input2": 3,
        "input3": 5,
        "result": [1, 2, 5, 4, 3, 6, 7]
    },
    {
        "input1": [200, 300, 400, 500],
        "input2": 2,
        "input3": 3,
        "result": [200, 400, 300, 500]
    },
    {
        "input1": [100, 200, 300, 400, 500],
        "input2": 1,
        "input3": 5,
        "result": [500, 400, 300, 200, 100]
    },
    {
        "input1": [6],
        "input2": 1,
        "input3": 1,
        "result": [6]
    },
    {
        "input1": [],
        "input2": 0,
        "input3": 0,
        "result": []
    }
];
test(linkedList.description, () => {
    for (let i = 0; i < testParamsReverseRange.length; i++) {
        let currentTestParams = testParamsReverseRange[i];
        const inputList = linkedList.makeLinkedListFromArray(currentTestParams.input1);
        const resultList = linkedList.reverseRangeOfLinkedList(inputList, currentTestParams.input2, currentTestParams.input3);
        const resultArray = linkedList.makeArrayFromLinkedList(resultList);
        expect(currentTestParams.result).toEqual(resultArray);
    }
});

test(linkedList.description, () => {
    for (let i = 0; i < testParams.length; i++) {
        let currentTestParams = testParams[i];
        const inputList = linkedList.makeLinkedListFromArray(currentTestParams.input);
        const resultList = linkedList.reverseLinkedList(inputList);
        const resultArray = linkedList.makeArrayFromLinkedList(resultList);
        expect(currentTestParams.result).toEqual(resultArray);
    }
});
