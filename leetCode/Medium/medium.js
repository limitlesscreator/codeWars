// https://leetcode.com/problems/combination-sum-ii/
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
// Each number in candidates may only be used once in the combination.
var combinationSum2 = function(candidates, target) {
    let result = []
    for (let i = 0; i < 100; i++){
        for (let j = 0; j < candidates.length; j++){
            let temp = []
            if (candidates[i] + candidates[j] === target && result.map(i=>x+=i, x=0).reverse()[0]){
                temp.push(candidates[i],candidates[j])
                result.push(temp)
                break
            }
        }
    }
    console.log(result)
};

combinationSum2([10,1,2,7,6,1,5],8)
// Output:
//     [
//         [1,1,6],
//         [1,2,5],
//         [1,7],
//         [2,6]
//     ]
// not working yet