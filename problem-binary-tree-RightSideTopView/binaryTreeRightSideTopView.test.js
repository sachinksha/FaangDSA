const binaryTree = require("./binaryTreeRightSideTopView");

const testParams = [{
    "input": {
        value: 3,
        left: {
            value: 6,
            left: {
                value: 9,
                right: {
                    value: 5,
                    left: {
                        value: 8
                    }
                }
            },
            right: {
                value: 2
            }
        },
        right: {
            value: 1,
            right: {
                value: 4
            }
        }
    },
    "result": [3, 1, 4, 5, 8]
}, {
    input: {
        value: 1,
        left: {
            value: 2,
            left: {
                value: 4
            },
            right: {
                value: 5
            }
        },
        right: {
            value: 3
        }
    },
    result: [1, 3, 5]
},
{
    input: {
    },
    result: []
},
{
    input: null,
    result: []
},
{
    input: {
        value: 1,
        right: {
            value: 2,
            left: {
                value: 3
            },
            right: {
                value: 4
            }
        }
    },
    result: [1, 2, 4]
}
];


test(binaryTree.description, () => {
    for (let i = 0; i < testParams.length; i++) {
        let currentTestParams = testParams[i];
        const result = binaryTree.getRightSideView(currentTestParams.input);
        expect(currentTestParams.result).toEqual(result);
    }
});