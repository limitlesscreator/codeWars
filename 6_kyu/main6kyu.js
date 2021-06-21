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
    clear()
}
{
    // ----------6-kyu----------6-kyu----------6-kyu----------6-kyu----------6-kyu----------

    // Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).
    //
    // Strings passed in will consist of only letters and spaces.
    // Spaces will be included only when more than one word is present.
    // Examples:
    //
    // spinWords("Hey fellow warriors") => "Hey wollef sroirraw"
    // spinWords("This is a test") => "This is a test"
    // spinWords("This is another test") => "This is rehtona test"
    function spinWords(str) {
        let arr = str.split(' ')
        let newArr = []
        let result
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length >= 5) {
                result = arr[i].split('').reverse().join('')
                newArr.push(result)
            } else {
                newArr.push(arr[i])
            }
        }
        let finalStr

        console.log(newArr.join(' '))
    }

    spinWords("Welcome")
}
{
    // ----------6-kyu----------6-kyu----------6-kyu----------6-kyu----------6-kyu----------

    // You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
    //
    // Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:
    //
    // likes [] -- must be "no one likes this"
    // likes ["Peter"] -- must be "Peter likes this"
    // likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
    // likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
    // likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
    // For 4 or more names, the number in and 2 others simply increases.
    clear()

    function likes(names) {
        let arr = names
        if (arr.length === 0) {
            console.log('no one likes this')
        } else if (arr.length === 1) {
            console.log(`${arr[0]} likes this`)
        } else if (arr.length === 2) {
            console.log(`${arr[0]} and ${arr[1]} like this`)
        } else if (arr.length === 3) {
            console.log(`${arr[0]}, ${arr[1]} and ${arr[2]} like this`)
        } else if (arr.length > 3) {
            console.log(`${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`)
        }
    }

    likes(['Peter'])
}


