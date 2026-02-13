const linkedList = require("./doublyLinkedList");

const testParams = [
    {
        "input": [{
            value: 1,
            child: null
        }, {
            value: 2,
            child: null
        }, {
            value: 3,
            child: null
        }
        ],
        "result": [1, 2, 3]
    }
    ,
    {
        "input": [{
            value: 1,
            child: null
        },
        {
            value: 2,
            child: [{
                value: 5,
                child: null
            },
            {
                value: 6,
                child: [{
                    value: 7,
                    child: null
                }]
            }]
        },
        {
            value: 3,
            child: null
        },
        {
            value: 4,
            child: null
        }],
        "result": [1, 2, 5, 6, 7, 3, 4]
    },
    {
        "input": [{
            value: 1,
            child: null
        },
        {
            value: 2,
            child: [{
                value: 5,
                child: null
            },
            {
                value: 6,
                child: [{
                    value: 7,
                    child: null
                }]
            }]
        },
        {
            value: 3,
            child: null
        },
        {
            value: 4,
            child: [{
                value: 8,
                child: [{
                    value: 9,
                    child: null
                },
                {
                    value: 10,
                    child: [{
                        value: 11,
                        child: null
                    }]
                }]
            }]
        }],
        "result": [1, 2, 5, 6, 7, 3, 4, 8, 9 ,10, 11]
    }
];

test(linkedList.description, () => {
    for (let i = 0; i < testParams.length; i++) {
        let currentTestParams = testParams[i];
        const inputList = linkedList.makeLinkedListFromArray(currentTestParams.input);
        const resultList = linkedList.flattenDoublyLinkedList(inputList);
        const resultArray = linkedList.makeArrayFromLinkedList(resultList);
        expect(currentTestParams.result).toEqual(resultArray);
    }
});
