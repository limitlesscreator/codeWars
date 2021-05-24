{
    // Usually when you buy something, you're asked whether your credit card
// number, phone number or answer to your most secret
// question is still correct. However, since someone could look over your
// shoulder, you don't want that shown on your screen. Instead, we mask it.
//     Your task is to write a function maskify, which changes all but the last four characters into '#'.
//     Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""
//
// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

    cc = "455636423423432432607935616"
    let result = []
    let lastNumbers = cc.substr(-4, 4)

    lengthCC = cc.split('').length
    console.log(lengthCC)

    for (i = 0; i < lengthCC - 4; i++) {
        result.push('#')
    }
    result.push(lastNumbers)
    finelResult = result.join('')
    console.log(finelResult)
}
{
    // ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//
//     If the function is passed a valid PIN string, return true, else return false
    let pin = "123\n"

    arrPin = pin.split('')
    console.log(arrPin)

    hereN = arrPin.filter(n => n === '\n')

    if (hereN.length === 0) {
        filtered = arrPin.filter(l => l != Number(l) && "\n")
        if (filtered.length > 0) {
            console.log("false")
        } else {
            if (filtered.length > 0) {
                console.log('false')
            } else {
                if (arrPin.length == 4 || arrPin.length == 6) {
                    console.log('true')
                } else {
                    console.log('false')
                }
            }

        }
    } else {
        console.log('stop!')
    }


}
{// Return the number (count) of vowels in the given string.
//
//     We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.
//
    let str = 'a e  jf e' //2
    let arr = str.split('')
    console.log(arr)
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u') {
            total++
        }
    }
    console.log(total)
}
{
    console.clear()
    // This time no story, no theory. The examples below show you how to write function accum:
    //
    // Examples:
    //
    // accum("abcd") -> "A-Bb-Ccc-Dddd"
    // accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    // accum("cwAt") -> "C-Ww-Aaa-Tttt"
    let str = "abcA"
    let arr = str.split('')
    let arrToStr = []
    let total = 0

    for (let i = 0; i < arr.length; i++) {
        arrToStr.push(arr[i].toUpperCase())
        total++
        for (let i = 1; i < total; i++) {
            arrToStr.push(arr[total - 1].toLowerCase())
        }
        arrToStr.push('-')

    }
    arrToStr.pop()
    str = arrToStr.join('')
    console.log(str)
}

{
    console.clear()
    // In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
    //
    // Example:
    //
    // highAndLow("1 2 3 4 5");  // return "5 1"
    // highAndLow("1 2 -3 4 5"); // return "5 -3"
    // highAndLow("1 9 3 4 -5"); // return "9 -5"
    let numbers = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"
    let min = 0
    let max = 0
    let arr = numbers.split(' ')
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i])
        if (arr[i] < 0 && arr[i] < min) {
            min = arr[i]
        } else if (arr[i] > 0 && max < arr[i]) {
            max = arr[i]
        }
    }
    let result = `${min} ${max}`
    console.log(result)

}


// {
//     console.clear()
//     // Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//     //
//     // Examples:
//     // Input: 42145 Output: 54421
//     //
//     // Input: 145263 Output: 654321
//     //
//     // Input: 123456789 Output: 987654321
//     let numbers = 155235
//     let arr = String(numbers).split('')
//
//     for (let i = 0; i < arr.length; i++){
//         if (typeof arr[i] === "string"){
//             arr[i] = Number(arr[i])
//         }
//     }
//     let min = 100000
//     let max = 0
//
//     for (i = 0 ; i < arr.length; i++){
//         if (arr[i] <= min){
//             min = arr[i]
//         }
//         else if (arr[i] >= max){
//             max = arr[i]
//         }
//     }
//     console.log(min,max)
//
//     console.log(arr)
// } dosnt work:( ------------------------------

{
    console.log('hi')
    let a = 25.12312
    let result
    let b = Math.round(a ** 0.5) ? result = true : result = false
    console.log(result)
}
{
    // In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
    //
    // Example
    // filter_list([1,2,'a','b']) == [1,2]
    // filter_list([1,'a','b',0,15]) == [1,0,15]
    // filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

    let arr = [1, 2, 'a', 'b']
    let sortNumber = []


    // for (i = 0; i < arr.length;i++){
    //     if (typeof arr[i] === 'number'){
    //         sortNumber.push(arr[i])
    //     }
    // }
    let sort = arr.filter(n => {
        return typeof n === 'number'
    })
    console.log(sort)
}
{
    // Examples
    // removeSmallest([1,2,3,4,5]) = [2,3,4,5]
    // removeSmallest([5,3,2,1,4]) = [5,3,2,4]
    // removeSmallest([2,2,1,2,1]) = [2,2,2,1]
    console.clear()
    let arr = [2, 2, 1, 4, 5, 1]
    let min = [arr[0]]
    let total = 0
    let sortArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== min) {
            sortArr.push(arr[i])

        } else if (arr[i] === min && total === 1) {
            sortArr.push(arr[i])
        } else if (arr[i] === min) {
            total++
        }

    }
    console.log(sortArr)
}
// {
//     console.clear()
//     // Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//     //
//     // Examples:
//     // Input: 42145 Output: 54421
//     //
//     // Input: 145263 Output: 654321
//     //
//     // Input: 123456789 Output: 987654321
//     let numbers = 155235
//     let arr = String(numbers).split('')
//
//     for (let i = 0; i < arr.length; i++){
//         if (typeof arr[i] === "string"){
//             arr[i] = Number(arr[i])
//         }
//     }
//     let min = 100000
//     let max = 0
//
//     for (i = 0 ; i < arr.length; i++){
//         if (arr[i] <= min){
//             min = arr[i]
//         }
//         else if (arr[i] >= max){
//             max = arr[i]
//         }
//     }
//     console.log(min,max)
//
//     console.log(arr)
// } dosnt work:( ------------------------------
// let arr = [10, 343445353, 3453445, 3453545353453]
//
// let firstNumber = arr[0]
// let secondNumber = arr[0]
//
// let deleted = 0
//
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] < firstNumber){
//         if (deleted === 0){
//             firstNumber = arr[i]
//             deleted++
//             arr.splice(i,1)
//         }
//     }
// }
// for (let i = 0; i<arr.length; i++){
//     if (arr[i] < secondNumber){
//         secondNumber = arr[i]
//     }
// }
//
// console.log(firstNumber + ' first number')
// console.log(secondNumber + " second number")
// console.log(firstNumber + secondNumber)
// dosnt work...


// // 68,6%
// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive integers. No floats or non-positive integers will be passed.
//
//     For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//
//     [10, 343445353, 3453445, 3453545353453] should return 3453455.

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] < secondNumber){
//         secondNumber = arr[i]
//     }
// }
console.clear()

    // [10, 343445353, 3453445, 3453545353453] should return 3453455

let numbers = [52, 76, 14, 12, 4]

let first = numbers[0]
let second = numbers[1]
let deletedIndex = 0

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] < first){
        first = numbers[i]
        deletedIndex = i
    }
}
numbers.splice(deletedIndex,1)
console.log(deletedIndex + " deleted index")
console.log(first + "first number")
console.log(second + "second numbers")
console.log(numbers + " all numbers")

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] < second){
        second = numbers[i]
    }
}
console.log(second)
console.log(first + second)

// or
const first = numbers.sort((a, z) => a - z)[0];
const second = numbers.sort((a, z) => a - z)[1];
final =  first + second

//