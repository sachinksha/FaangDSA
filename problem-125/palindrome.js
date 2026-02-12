/**
* Leet code problem: 125
* Standard string palindrome checker - isValidPalindrome 
* and variation - almost a plaindrome checker
* Assume spaces, punctuations, non alphanumeric characters are to be ignored
*/
const description = "user input string returns true if it is a valid palindrome";

const cleanString = (s) => {
    const cleanString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanString;
}
/**
 * Two pointers converging to centre to check if string is a palindrome
 * @param {string} s
 * @returns boolean 
 */
const isPalindromePointersToCentre = function (s) {
    s = cleanString(s);
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

/**
 * Two pointers from centre to left and right to check if string is a palindrome
 * @param {string} s
 * @returns boolean 
 */
const isPalindromePointersFromCentre = function (s) {
    s = cleanString(s);
    let left, right;
    left = s.length / 2, right = left;
    if (s.length <= 1) {
        return true;
    }
    else if (s.length === 2) {
        left = 0;
        right = 1;
    }
    else if (s.length > 2 && s.length % 2 === 0) {
        right++;
    }
    while (left >= 0 && right < s.length) {
        if (s[left] !== s[right]) {
            return false;
        }
        left--;
        right++;
    }
    return true;
}

/**
 * reversed strings matched left to right to check if string is a palindrome
 * @param {string} s
 * @returns boolean 
 */
const isPalindromeReversedStrings = function (s) {
    s = cleanString(s);
    const reversedValue = s.split("").reverse().join("");
    for (let left = 0; left < s.length; left++) {
        if (s[left] !== reversedValue[left]) {
            return false;
        }
    }
    return true;
}
/**
 * The subroutine checks with two pointers converging to the centre for verifying a palindrome
 * @param {string} s
 * @returns boolean 
 */
const isAlmostPalindromeSubstring = (s, left, right) => {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

/**
 * Check if two strings are 'almost' a palindrome. 
 * The subroutine checks with two pointers converging to the centre
 * @param {string} s
 * @returns boolean 
 */
const isAlmostPalindrome = (s) => {
    s = cleanString(s);
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return isAlmostPalindromeSubstring(s, left + 1, right) || isAlmostPalindromeSubstring(s, left, right - 1);
        }
        left++;
        right--;
    }
    return true;
}


module.exports = { description, isAlmostPalindrome, isPalindromePointersToCentre, isPalindromePointersFromCentre, isPalindromeReversedStrings };