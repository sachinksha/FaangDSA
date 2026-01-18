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
    // console.log(`compareStringsWithBackspaceHashChar, ${testString1}, ${testString2} : ${compareStringsWithBackspaceHashChar(testString1, testString2)}`);

    // testString1 = "aaa###z";
    // testString2 = "aab#z";
    // console.log(`compareStringsWithBackspaceHashChar, ${testString1}, ${testString2} : ${compareStringsWithBackspaceHashChar(testString1, testString2)}`);

    // testString1 = "aaa#Z";
    // testString2 = "aab#z";
    // console.log(`compareStringsWithBackspaceHashChar, ${testString1}, ${testString2} : ${compareStringsWithBackspaceHashChar(testString1, testString2)}`);

    // testString1 = "aaaas##asdasd##z";
    // testString2 = "aab#z";
    // console.log(`compareStringsWithBackspaceHashChar, ${testString1}, ${testString2} : ${compareStringsWithBackspaceHashChar(testString1, testString2)}`);

    // testString1 = "aaa33##asdas2##z";
    // testString2 = "aaaasdaz";
    // console.log(`compareStringsWithBackspaceHashChar, ${testString1}, ${testString2} : ${compareStringsWithBackspaceHashChar(testString1, testString2)}`);

    const compareBackspace = function (value1, value2) {
        let p1 = value1.length-1, p2 = value2.length-1;
        while(p1 >= 0 && p2 >= 0) {


            let hashCount = 0;
            while(value1[p1] === '#') {
                p1--;
                hashCount++;
            }
            while(hashCount>0){
                if(value1[p1] === "#") {
                    hashCount++;
                }
                else {
                    hashCount--;
                }
                p1--;
            }


            hashCount = 0;
            while(value2[p2] === '#'){
                p2--;
                hashCount++;
            }
            while(hashCount>0){
                if(value2[p2] === "#") {
                    hashCount++;
                }
                else {
                    hashCount--;
                }
                p2--;
            }

            
            console.log(`p1, p2, value1[p1], value2[p2] : ${p1}, ${p2}, ${value1[p1]}, ${value2[p2]}`);
            if(p1 < 0 || p2 < 0) {
                return false;
            }
            if(p1 >= 0 && p2 >= 0 && value1[p1] !== value2[p2]) {
                return false;
            }
            else {
                p1--;
                p2--;
            }
        }
        return true;
    }

    testString1 = "bxj##tw"
    testString2 = "bxj###tw"
    console.log(`compareBackspace, ${testString1}, ${testString2} : ${compareBackspace(testString1, testString2)}`);

    // testString1 = "xywrrmp";
    // testString2 = "xywrrmu#p";
    // console.log(`compareBackspace, ${testString1}, ${testString2} : ${compareBackspace(testString1, testString2)}`);

    // testString1 = "bxj##tw";
    // testString2 = "bx0#j##tw";
    // console.log(`compareBackspace, ${testString1}, ${testString2} : ${compareBackspace(testString1, testString2)}`);

    // testString1 = "aaa#z";
    // testString2 = "aab#z";
    // console.log(`compareBackspace, ${testString1}, ${testString2} : ${compareBackspace(testString1, testString2)}`);

    // testString1 = "aaa###z";
    // testString2 = "aab#z";
    // console.log(`compareBackspace, ${testString1}, ${testString2} : ${compareBackspace(testString1, testString2)}`);

    // testString1 = "aaa#Z";
    // testString2 = "aab#z";
    // console.log(`compareBackspace, ${testString1}, ${testString2} : ${compareBackspace(testString1, testString2)}`);

    // testString1 = "aaaas##asdasd##z";
    // testString2 = "aab#z";
    // console.log(`compareBackspace, ${testString1}, ${testString2} : ${compareBackspace(testString1, testString2)}`);

    // testString1 = "aaa33##asdas2##z";
    // testString2 = "aaaasdaz";
    // console.log(`compareBackspace, ${testString1}, ${testString2} : ${compareBackspace(testString1, testString2)}`);

})();
