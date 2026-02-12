const palindrome = require("./palindrome");

const testParams = [
    {
        "input": "",
        "result": true
    },
    {
        "input": "a",
        "result": true
    },
    {
        "input": "aa",
        "result": true
    },
    {
        "input": "aba",
        "result": true
    },
    {
        "input": "ab",
        "result": false
    },
    {
        "input": "A man, a plan, a canal: Panama",
        "result": true
    },];


const testParamsAlmostPalindrome = [
    {
        "input": "",
        "result": true
    },
    {
        "input": "a",
        "result": true
    },
    {
        "input": "aa",
        "result": true
    },
    {
        "input": "aba",
        "result": true
    },
    {
        "input": "ab",
        "result": true
    },
    {
        "input": "abcdefdcba",
        "result": true
    },
    {
        "input": "malayalam",
        "result": true
    },
    {
        "input": "malaayalam",
        "result": true
    },
    {
        "input": "malaayalama",
        "result": false
    },
    {
        "input": "A man, a plan, a canal: Panama",
        "result": true
    },];
test(palindrome.description, () => {
    for(let i=0;i<testParams.length;i++) {
        let currentTestParams = testParams[i];
        expect(palindrome.isPalindromePointersToCentre(currentTestParams.input)).toBe(currentTestParams.result);
    }
});

test(palindrome.description, () => {
    for(let i=0;i<testParams.length;i++) {
        let currentTestParams = testParams[i];
        expect(palindrome.isPalindromePointersFromCentre(currentTestParams.input)).toBe(currentTestParams.result);
    }
});

test(palindrome.description, () => {
    for(let i=0;i<testParams.length;i++) {
        let currentTestParams = testParams[i];
        expect(palindrome.isPalindromeReversedStrings(currentTestParams.input)).toBe(currentTestParams.result);
    }
});

test(palindrome.description, () => {
    for(let i=0;i<testParamsAlmostPalindrome.length;i++) {
        let currentTestParams = testParamsAlmostPalindrome[i];
        expect(palindrome.isAlmostPalindrome(currentTestParams.input)).toBe(currentTestParams.result);
    }
});
