/**
* Leet code problem: 844
* Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
* Note that after backspacing an empty text, the text will continue empty.
*/
const description = "user input string comparison - given that backspace is indicated by '#' symbol";
/**
Helper function
 */
const buildArray = function (value) {
    let arr = [];
    for (let i = 0; value && (i < value.length); i++) {
        if (value[i] === "#") {
            arr.pop();
        }
        else {
            arr.push(value[i]);
        }
    }
    return arr;
}
/**
 * Brute force method - user input string comparison method - given that the backspace is indicated by '#'
 * @param {string} value1 
 * @param {string} value2 
 * @returns result of comparison of the strings
 */
const bruteforce_compareStringsWithBackspaceHashChar = function (value1, value2) {
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
/**
 * Optimal solution - user input string comparison method - given that the backspace is indicated by '#'
 * @param {string} value1 
 * @param {string} value2 
 * @returns result of comparison of the strings
 */
const optimal_compareStringsWithBackspaceHashChar = function (value1, value2) {
    let p1 = value1.length - 1, p2 = value2.length - 1;
    while (p1 >= 0 && p2 >= 0) {


        let hashCount = 0;
        while (value1[p1] === '#') {
            p1--;
            hashCount++;
        }
        while (hashCount > 0) {
            if (value1[p1] === "#") {
                hashCount++;
            }
            else {
                hashCount--;
            }
            p1--;
        }

        hashCount = 0;
        while (value2[p2] === '#') {
            p2--;
            hashCount++;
        }
        while (hashCount > 0) {
            if (value2[p2] === "#") {
                hashCount++;
            }
            else {
                hashCount--;
            }
            p2--;
        }

        //console.log(`p1, p2, value1[p1], value2[p2] : ${p1}, ${p2}, ${value1[p1]}, ${value2[p2]}`);
        if (p1 < 0 || p2 < 0) {
            return false;
        }
        if (p1 >= 0 && p2 >= 0 && value1[p1] !== value2[p2]) {
            return false;
        }
        else {
            p1--;
            p2--;
        }
    }
    return true;
}

module.exports = {description, bruteforce_compareStringsWithBackspaceHashChar, optimal_compareStringsWithBackspaceHashChar};