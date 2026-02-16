const binaryTree = require("./binaryTree");

const testParams = [{
    "input": {
        left: {
            left: {
            },
            right: {

            }
        },
        right: {
            left: {

            },
            right:{

            }
        }
    },
    "result":  3
}, {
    input: {
        left: {
            left: {
                left: {
                    left: {
                        left: {

                        }
                    }
                }
            }
        }
    },
    result: 6
},
{
    input: {

    },
    result: 1},
    {
        input: null,
        result: 0
    },
    {
        input: {
            right: {
                left: {
                    left: {

                    },
                    right: {
                        right: {

                        }
                    }
                },
                right: {

                }
            }
        },
        result: 5
    }
];


test(binaryTree.description, () => {
    for (let i = 0; i < testParams.length; i++) {
        let currentTestParams = testParams[i];
        const result = binaryTree.binaryTreeDepth(currentTestParams.input);
        expect(currentTestParams.result).toEqual(result);
    }
});