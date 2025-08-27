(function () {
    const buildArray = function (value) {
        let arr = [];
        for (let i = 0; i < value.length; i++) {
            if (value[i] === "#") {
                arr.pop();
            }
            else {
                arr.push(value[i]);
            }
        }
        return arr;
    }
    const compareStringsWithBackspaceHashChar = function (value1, value2) {
        let a1 = buildArray(value1), a2 = buildArray(value2);
        if (a1.length !== a2.length) {
            return false;
        }
        else {
            for (let i = 0; i < a1.length; i++) {
                if (a1[i] !== a2[i]) {
                    return false;
                }
            }
        }
        return true;
    }
    let testString1 = "aaa#z";
    let testString2 = "aab#z";
    console.log(`compareStringsWithBackspaceHashChar, ${testString1}, ${testString2} : ${compareStringsWithBackspaceHashChar(testString1, testString2)}`);

    testString1 = "aaa###z";
    testString2 = "aab#z";
    console.log(`compareStringsWithBackspaceHashChar, ${testString1}, ${testString2} : ${compareStringsWithBackspaceHashChar(testString1, testString2)}`);

    testString1 = "aaa#Z";
    testString2 = "aab#z";
    console.log(`compareStringsWithBackspaceHashChar, ${testString1}, ${testString2} : ${compareStringsWithBackspaceHashChar(testString1, testString2)}`);

    testString1 = "aaaas##asdasd##z";
    testString2 = "aab#z";
    console.log(`compareStringsWithBackspaceHashChar, ${testString1}, ${testString2} : ${compareStringsWithBackspaceHashChar(testString1, testString2)}`);

    testString1 = "aaa33##asdas2##z";
    testString2 = "aaaasdaz";
    console.log(`compareStringsWithBackspaceHashChar, ${testString1}, ${testString2} : ${compareStringsWithBackspaceHashChar(testString1, testString2)}`);
})();
