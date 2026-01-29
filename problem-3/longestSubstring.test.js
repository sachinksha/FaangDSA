const longestSubstring = require("./longestSubstring");

const testParams = [
    {
        "input": "abccabb",
        "result": 3
    },
    {
        "input": "",
        "result": 0
    },
    {
        "input": "aaaaa",
        "result": 1
    },
    {
        "input": "a",
        "result": 1
    },
    {
        "input": "abccab",
        "result": 3
    },
    {
        "input": "abcbdca",
        "result": 4
    },
    {
        "input": "abcbdaac",
        "result": 4
    },
    {
        "input": "ctnkh",
        "result": 5
    }];

test(longestSubstring.description, () => {
    for (let i = 0; i < testParams.length; i++) {
        let currentTestParams = testParams[i];
        expect(longestSubstring.longestSubstring(currentTestParams.input)).toStrictEqual(currentTestParams.result);
    }
});