/**
 * LeetCode problem number: 3
 * String problem
 * Longest Substring without repeating characters
 * Contiguous string
 */
const description = "returns the length of longest substring without repeating characters";

const longestSubstring = (s) => {
    if(s && s.length <= 1) {
        return s.length;
    }
    let longest = 0, left = 0;
    const seen = new Map();
    for(let right = left; right < s.length; right++) {
        const currentValue = s[right];
        const previouslySeenValue = seen.get(currentValue)
        if(previouslySeenValue >= left) {
            left = previouslySeenValue + 1;
        }
        seen.set(currentValue, right);
        longest = Math.max(longest, right - left + 1);
    }
    return longest;
}

module.exports = {description, longestSubstring};