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
{
    // ----------6-kyu----------6-kyu----------6-kyu----------6-kyu----------6-kyu----------
    // Count the number of Duplicates
    // Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
    //
    // Example
    // "abcde" -> 0 # no characters repeats more than once
    // "aabbcde" -> 2 # 'a' and 'b'
    // "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
    // "indivisibility" -> 1 # 'i' occurs six times
    // "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
    // "aA11" -> 2 # 'a' and '1'
    // "ABBA" -> 2 # 'A' and 'B' each occur twice
    clear()

    function duplicateCount(text) {
        let arr = text.toLowerCase().split('')
        result = 0

        let newArr = []
        for (let i = 0; i < arr.length; i++) {
            points = 0
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] === arr[j] && newArr.indexOf(arr[i]) === -1) {
                    points++
                    if (points === 2) {
                        newArr.push(arr[i])
                        break;
                    }
                }
            }
        }

        console.log(newArr.length)
    }

    duplicateCount('aabbcde') // 2
}
{
    clear()
    // Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
    // For example:
    // persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
    //                       and 4 has only one digit

    // persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
    //                        1*2*6 = 12, and finally 1*2 = 2
    //
    // persistence(4) === 0 // because 4 is already a one-digit number
    function persistence(num) {
        let points = String(num)
        let result = 0
        let arrForAddAtPoints = []
        let newNumber = 1
        for (let i = 0; i < 10; i++) {
            arrForAddAtPoints = points.split('')
            if (arrForAddAtPoints.length > 1) {
                result++
                for (let j = 0; j < arrForAddAtPoints.length; j++) {
                    arrForAddAtPoints = arrForAddAtPoints.map(n => +n)
                    newNumber += arrForAddAtPoints[i]
                    console.log(newNumber)
                }
            }
            console.log(arrForAddAtPoints)
        }


    }

    persistence(39) //3
}
clear()
{
    // ----------6-kyu----------6-kyu----------6-kyu----------6-kyu----------6-kyu----------
    // Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.
    //
    // When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?
    //
    // More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?
    //
    // The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.
    function race(v1, v2, g) {
        let totalSeconds = 0
        let hours = 0
        let minutes = 0
        let seconds = 0
        let result = []

        let spedFirstTortPerSec = v1 / 60 / 60
        let spedSecondTortPerSec = v2 / 60 / 60

        let distanceFirst = g
        let distanceSecond = 0
        if (v1 >= v2) {
            return null
        } else {
            hours = Math.trunc(totalSeconds / 60 / 60)
            minutes = Math.trunc((totalSeconds - (hours * 60 * 60)) / 60)
            seconds = (totalSeconds - (hours * 60 * 60)) - (minutes * 60);
            if (distanceFirst <= distanceSecond) return [hours, minutes, seconds - 1];

            while (distanceFirst > distanceSecond) {
                distanceFirst += spedFirstTortPerSec
                distanceSecond += spedSecondTortPerSec
                totalSeconds++
            }
            hours = Math.trunc(totalSeconds / 60 / 60)
            minutes = Math.trunc((totalSeconds - (hours * 60 * 60)) / 60)
            seconds = (totalSeconds - (hours * 60 * 60)) - (minutes * 60)
            result = [hours, minutes, seconds - 1]
            return (result)
        }
    }

    race(80, 91, 37) //[3, 21, 49]
    race(720, 850, 70)
    race(80, 91, 37)
    race(80, 100, 40)
}
// ----------6-kyu----------6-kyu----------6-kyu----------6-kyu----------6-kyu----------
// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
//     The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
//     Write a method that takes the array as an argument and returns this "outlier" N.
//
//     Examples
//     [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
//
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)
function findOutlier(integers) {
    let oddNumbers = 0
    let evenNumbers = 0
    let result = 0
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            evenNumbers++
        } else oddNumbers++
    }
    console.log(`odd: ${oddNumbers} and even: ${evenNumbers}`)
    if (evenNumbers === 1) {
        for (let j = 0; j < integers.length; j++) {
            if (integers[j] % 2 === 0) {
                result = integers[j]
            }
        }
    } else {
        for (let q = 0; q < integers.length; q++) {
            if (integers[q] % 2 !== 0) {
                result = integers[q]
            }
        }
    }
    return result
}

findOutlier([2, 6, 8, 10, 3])

// the second cata is 6kyu, but i know that she's not looking like 6 kyu, anyway i decided to solve it
// ----------6-kyu----------6-kyu----------6-kyu----------6-kyu----------6-kyu----------

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//
//     Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
//     Don't forget the space after the closing parentheses!
function createPhoneNumber(numbers) {
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])//, "(123) 456-7890")