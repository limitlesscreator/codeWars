// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

function solution(number){
    if (number > 0){
        let repit = number
        let arr = []
        let result = 0
        number--
        for (let i = 0; i < repit; i++){
            if (number % 3 === 0 || number % 5 === 0 === Number.isInteger(number)){
                arr.push(number)
                number--
            }
            else {
                number--
            }
        }
        for (let i = 0; i < arr.length;i++){
            result += arr[i]
        }
        console.log(arr)
        console.log(result)
    }
}
solution(10)
console.clear()
//FIRST KYU 6!!!!!!
// --------------------------------------------------------------------------

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    let points = 0
    let number = 0
    for (let i = 0; i < A.length; i++){
        debugger
        number = A[i]
        for (let i = 0; i < A.length; i++){
            if (number === A[i]){
                points++
            }
        }
        if (points % 2 === 1 || points % 2 === -1){
            console.log(number + ' итог')
            break;
        }
        points = 0
    }
    console.log(1 % 2)
}
findOdd([ 1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5 ])