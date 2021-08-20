// https://leetcode.com/problems/longest-common-prefix/
// Write a function to find the longest common prefix string amongst an array of strings.
//     If there is no common prefix, return an empty string "".
var longestCommonPrefix = function (strs) {
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