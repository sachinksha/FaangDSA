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
test(linkedList.description, () => {
    for(let i=0;i<testParams.length;i++) {
        let currentTestParams = testParams[i];
        const inputList = linkedList.makeLinkedListFromArray(currentTestParams.input);
        const result = linkedList.reverseLinkedList(inputList);
        const resultList = linkedList.makeArrayFromLinkedList(result);
        expect(currentTestParams.input).toEqual(resultList);
    }
});
