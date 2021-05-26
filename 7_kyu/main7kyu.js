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

{
    let numbers = [52, 76, 14, 12, 4]
    let first = numbers[0]
    let second = numbers[1]
    let deletedIndex = 0

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < first) {
            first = numbers[i]
            deletedIndex = i
        }
    }
    numbers.splice(deletedIndex, 1)
    console.log(deletedIndex + " deleted index")
    console.log(first + "first number")
    console.log(second + "second numbers")
    console.log(numbers + " all numbers")

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < second) {
            second = numbers[i]
        }
    }
    console.log(second)
    console.log(first + second)
}
{
    let numbers = [52, 76, 14, 12, 4]
    const first = numbers.sort((a, z) => a - z)[0];
    const second = numbers.sort((a, z) => a - z)[1];
    final = first + second
}

console.clear()


// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//
//     Example:
//
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:
//
//     All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.

{
    let numbers = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"
    numberNumMin = numbers.split(' ').map(n => +n).sort((a, z) => a - z)[0]
    numberNumMax = numbers.split(' ').map(n => +n).sort((a, z) => a - z)
    numberNumMax = numberNumMax[numberNumMax.length - 1]
    console.log(numberNumMin.toString())
    console.log(numberNumMax.toString() + " " + numberNumMin.toString())
}
// 89,3
{
    console.clear()

    // Given a sequence of numbers, find the largest pair sum in the sequence.
    //
    // For example
    //
    // [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
    // [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
    // Input sequence contains minimum two elements and every element is an integer
    let arr = [10, 14, 2, 23, 19]
    let first = arr.sort((a, z) => z - a)[0]
    let second = arr.sort((a, z) => z - a)[1]
    console.log(first + second)
}
//94,6
{
    console.clear()
    // You might know some pretty large perfect squares. But what about the NEXT one?
    //
    // Complete the findNextSquare method that finds the next integral perfect square after the one
    // passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
    //
    // If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
    //
    // Examples:
    //
    // findNextSquare(121) --> returns 144
    // findNextSquare(625) --> returns 676
    // findNextSquare(114) --> returns -1 since 114 is not a perfect square
    let sq = 15241383936
    // console.log(sq ** 0.5 % 2)


    if (Number.isInteger(sq ** 0.5 % 10) || sq ** 0.5 % 2 === 0) {
        sq++
        while (sq ** 0.5 % 2 === 0) {
            sq++
            console.log(sq)
        }
    } else {
        console.log('wrong output')
    }

}
{
    console.clear()
// если тру то возвращаем ближайшее новое, если фалс то возвращаем -1
    let sq = 122;//целый корень?
    let truth = Number.isInteger(sq ** 0.5)
    if (truth) {
        sq++
        for (let i = 0; Number.isInteger(sq ** 0.5) !== true; i++) {
            sq++
        }
    } else {
        console.log('end')
    }


}
console.clear()
console.log('work')


{
//     A square of squares
//     You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
//     However, sometimes,
//     you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, ' +
// 'whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
//     Task
//     Given an integral number, determine if it's a square number:
//     In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
//     The tests will always use some integral number, so don't worry about that in dynamic typed languages.
//     Examples
//     -1  =>  false
//     0  =>  true
//     3  =>  false
//     4  =>  true
//     25  =>  true
//     26  =>  false
    let n = -1
    console.log(Number.isInteger(n ** 0.5 % 2))
}

{
    console.clear()
    // An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a
    // function that determines whether a string that contains only letters is an isogram.
    // Assume the empty string is an isogram. Ignore letter case.
    //
    // isIsogram("Dermatoglyphics") == true
    // isIsogram("aba") == false
    // isIsogram("moOse") == false // -- ignore letter case

    let str = 'Dermatoglyphics'

    let mainStrInput = str.toLowerCase()
    let arrStr = mainStrInput.split('')
    let pointA = 0
    let pointB = 0
    let pointC = 0
    let pointD = 0
    let pointE = 0
    let pointF = 0
    let pointG = 0
    let pointH = 0
    let pointI = 0
    let pointJ = 0
    let pointK = 0
    let pointL = 0
    let pointM = 0
    let pointN = 0
    let pointO = 0
    let pointP = 0
    let pointQ = 0
    let pointR = 0
    let pointS = 0
    let pointT = 0
    let pointU = 0
    let pointV = 0
    let pointW = 0
    let pointX = 0
    let pointY = 0
    let pointZ = 0

    for (let i = 0; i < arrStr.length; i++) {
        if ("a" === arrStr[i]) {
            pointA++
        } else if ("b" === arrStr[i]) {
            pointB++
        } else if ("c" === arrStr[i]) {
            pointC++
        }else if ("d" === arrStr[i]) {
            pointD++
        }else if ("e" === arrStr[i]) {
            pointE++
        }else if ("f" === arrStr[i]) {
            pointF++
        }else if ("g" === arrStr[i]) {
            pointG++
        }else if ("h" === arrStr[i]) {
            pointH++
        }else if ("i" === arrStr[i]) {
            pointI++
        }else if ("j" === arrStr[i]) {
            pointJ++
        }else if ("k" === arrStr[i]) {
            pointK++
        }else if ("l" === arrStr[i]) {
            pointL++
        }else if ("m" === arrStr[i]) {
            pointM++
        }else if ("n" === arrStr[i]) {
            pointN++
        }else if ("o" === arrStr[i]) {
            pointO++
        }else if ("p" === arrStr[i]) {
            pointP++
        }else if ("q" === arrStr[i]) {
            pointQ++
        }else if ("r" === arrStr[i]) {
            pointR++
        }else if ("s" === arrStr[i]) {
            pointS++
        }else if ("t" === arrStr[i]) {
            pointT++
        }else if ("u" === arrStr[i]) {
            pointU++
        }else if ("v" === arrStr[i]) {
            pointV++
        }else if ("w" === arrStr[i]) {
            pointW++
        }else if ("x" === arrStr[i]) {
            pointX++
        }else if ("y" === arrStr[i]) {
            pointY++
        }else if ("z" === arrStr[i]) {
            pointZ++
        }

    }
    if (pointA > 1 || pointB > 1 || pointC > 1 || pointD > 1 || pointE > 1 || pointF > 1 || pointG > 1 || pointH > 1 || pointI > 1 || pointJ > 1 || pointK > 1 || pointL > 1 || pointM > 1 || pointN > 1 || pointO > 1 || pointP > 1 || pointQ > 1 || pointR > 1 ||
    pointS > 1 || pointT > 1 || pointU > 1 || pointV > 1 || pointW > 1 || pointX > 1 || pointY > 1 || pointZ > 1){
        console.log(false)
    }
    else {
        console.log(true)
    }
    // console.log(arrStr)
    // let counter = 0
    // let letters = []
    // for (let i = 0; i < arrStr.length; i++){
    //     if ('a' || "b" || "c" || "d" || "e" || "f" || "g" ||
    //         "h" || "i" || "j" || "k" || "l" || "m" || "n" ||
    //         "o" || "p" || "q" || "r" || "s" || "t" || "u" ||
    //         "v" || "w" || "x" || "y" || "z" === arrStr[i]){
    //         counter++
    //
    //     }
    // }
    // console.log(counter)

    // let some = 'aba'.split('')
    //
    // console.log(some)
    // for (let i = 0; i < some.length; i++){
    //     if ("a" === some[i]){
    //         pointA++
    //     }
    // }
}









