// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)
{
    function solution(number) {
        if (number > 0) {
            let repit = number
            let arr = []
            let result = 0
            number--
            for (let i = 0; i < repit; i++) {
                if (number % 3 === 0 || number % 5 === 0 === Number.isInteger(number)) {
                    arr.push(number)
                    number--
                } else {
                    number--
                }
            }
            for (let i = 0; i < arr.length; i++) {
                result += arr[i]
            }
            console.log(arr)
            console.log(result)
        }
    }

    solution(10)
    console.clear()
}

//FIRST KYU 6!!!!!!
// --------------------------------------------------------------------------

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
{
    function findOdd(A) {
        let points = 0
        let number = 0
        for (let i = 0; i < A.length; i++) {
            number = A[i]
            for (let i = 0; i < A.length; i++) {
                if (number === A[i]) {
                    points++
                }
            }
            if (points % 2 === 1 || points % 2 === -1) {
                console.log(number + ' итог')
                break;
            }
            points = 0
        }
        console.log(1 % 2)
    }

    findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])
}
// --------------------------------------------------------------------------
// Digital root is the recursive sum of all the digits in a number.
//
//     Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
//
//     Examples
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
function clear() {
    console.clear()
}

clear()

{
    function digital_root(n) {
        let arr = String(n).split('')
        let result = 0
        for (let i = 0; i < arr.length; i++) {
            result += +arr[i]
        }
        if (result > 0 && result < 10) {
            console.log(result)
        } else if (result > 9) {
            arr = String(result).split('')
            console.log(arr)
            result = 0
            for (let i = 0; i < arr.length; i++) {
                result += +arr[i]
            }
            if (result > 0 && result < 10) {
                console.log(result)
            } else if (result > 9) {
                arr = String(result).split('')
                console.log(arr)
                result = 0
                for (let i = 0; i < arr.length; i++) {
                    result += +arr[i]
                }
                if (result > 0 && result < 10) {
                    console.log(result)
                } else if (result > 9) {
                    arr = String(result).split('')
                    console.log(arr)
                    result = 0
                    for (let i = 0; i < arr.length; i++) {
                        result += +arr[i]
                    }
                    if (result > 0 && result < 10) {
                        console.log(result)
                    }
                }
            }
        }

    }

    digital_root(493193234343343433) //7
}


