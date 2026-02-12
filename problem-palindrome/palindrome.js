/**
* Leet code problem: 
* Standard string palindrome checker
* Assume spaces, punctuations, non alphanumeric characters are to be ignored
*/
const description = "user input string returns true if it is a valid palindrome";

const cleanString = (input) => {
    const alphanumeric = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return alphanumeric;
}
/**
 * Two pointers converging to centre to check if string is a palindrome
 * @param {string} value
 * @returns boolean 
 */
const isPalindromePointersToCentre = function (value) {
    value = cleanString(value);
    let left=0, right=value.length - 1;
    while(left<right) {
        if(value[left] !== value[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

/**
 * Two pointers from centre to left and right to check if string is a palindrome
 * @param {string} value
 * @returns boolean 
 */
const isPalindromePointersFromCentre = function (value) {
    value = cleanString(value);
    let left,right;
    left = value.length / 2, right = left;
    if (value.length <= 1){
        return true;
    }
    else if (value.length === 2) {
        left = 0;
        right = 1;
    }
    else if(value.length > 2 && value.length %2 === 0) {
        right++;
    }
    while(left >= 0 && right<value.length) {
        if(value[left] !== value[right]){
            return false;
        }
        left--;
        right++;
    }
    return true;
}

/**
 * reversed strings matched left to right to check if string is a palindrome
 * @param {string} value
 * @returns boolean 
 */
const isPalindromeReversedStrings = function (value) {
    value = cleanString(value);
    const reversedValue = value.split("").reverse().join("");
    for(let left=0; left<value.length;left++) {
        if(value[left] !== reversedValue[left]){
            return false;
        }
    }
    return true;
}
/**
 * The subroutine checks with two pointers converging to the centre for verifying a palindrome
 * @param {string} value
 * @returns boolean 
 */
const isAlmostPalindromeSubstring = (value, left, right) => {
    while(left < right) {
        if(value[left] !== value[right]){
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
 * @param {string} value
 * @returns boolean 
 */
const isAlmostPalindrome = (value) => {
    value = cleanString(value);
    let left=0, right=value.length - 1;
    while(left<right) {
        if(value[left] !== value[right]){
            return isAlmostPalindromeSubstring(value, left+1, right) || isAlmostPalindromeSubstring(value, left, right-1);
        }
        left++;
        right--;
    }
    return true;
}


module.exports = {description, isAlmostPalindrome, isPalindromePointersToCentre, isPalindromePointersFromCentre, isPalindromeReversedStrings};