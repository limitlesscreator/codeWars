// https://leetcode.com/problems/longest-common-prefix/
// Write a function to find the longest common prefix string amongst an array of strings.
//     If there is no common prefix, return an empty string "".
const longestCommonPrefix = function (strs) {
    let result = []
    for (let i = 0; i < strs[0].length; i++) {
        let letter = strs[0][i]
        console.log(letter)
        if (strs.every(el => el[i] === letter)) {
            result.push(letter)
        } else {
            break
        }
    }
    console.log(result.join(''))
};
// longestCommonPrefix(["flower","flow","flight"]) //fl
longestCommonPrefix(["cir", "car"]) //c
console.clear()

// https://leetcode.com/problems/palindrome-number/
// Given an integer x, return true if x is palindrome integer.
//     An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

const isPalindrome = function (x) {
    console.log(String(x) === String(x).split("").reverse().join(""))
};

isPalindrome(-101) //false
isPalindrome(101) //true
console.clear()

// https://leetcode.com/problems/search-insert-position/
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

const searchInsert = function (nums, target) {
    let result = 0
    for (let i = 0; i < 5000; i++) {
        if (nums[i + 1] === target) {
            result = i + 1
            break;
        } else if (nums[i] === target) {
            result = i
            break;
        } else if (nums[i] < target && nums[i + 1] > target) {
            result = i + 1
            break;
        } else if (nums.every(el => el < target)) {
            result = nums.length
            break;
        }
    }
    return result
};

// searchInsert([3,6,7,8,10],5) //1
searchInsert([1, 3, 5, 6], 7) //4