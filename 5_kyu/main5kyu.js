// ----------5-kyu----------5-kyu----------5-kyu----------5-kyu----------5-kyu----------
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
//
//     Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
{
    function pigIt(str) {
        let newStr = str.split(' ')
        let result = ''
        let newLetter = ''
        let arr = []
        let final = ''
        for (let i = 0; i < newStr.length; i++) {
            result = newStr
            result = result[i].split('')
            newLetter = result[0]
            console.log(result[0])
            if (result[0] !== '!' && result[0] !== '?' && result[0] !== ',' && result[0] !== '.') {
                result[0] = ''
                arr.push(result.join('') + newLetter + 'ay')
            } else {
                arr.push(result.join(''))
            }
        }
        console.log(arr)
        for (let i = 0; i < newStr.length; i++) {
            if (i < newStr.length && i !== newStr.length - 1) {
                final += arr[i] + ' '
            } else (
                final += arr[i]
            )
        }
        console.log(final)
    }

    pigIt('Pig latin is cool !') //igPay atinlay siay oolcay !'
}
console.clear()
// ----------5-kyu----------5-kyu----------5-kyu----------5-kyu----------5-kyu----------
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

const moveZeros = (arr) => {
    let newArr = []
    let zeros = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros++
        } else newArr.push(arr[i])
    }
    for (let j = 0; j < zeros; j++) {
        newArr.push(0)
    }
    console.log(newArr)
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]) // returns[false,1,1,2,1,3,"a",0,0]
// i think it's easier than 5kyu, but it's 5 kyu))

console.clear()
// ----------5-kyu----------5-kyu----------5-kyu----------5-kyu----------5-kyu----------
// omplete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
//
//     Notes:
//
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
//     Performance needs to be considered
// Input strings s1 and s2 are null terminated.
//     Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False
function scramble(str1, str2) {
    let randomLetters = str1.split('')
    let checkWord = str2.split('')
    let points = 0
    for (let i = 0; i < checkWord.length; i++) {
        if (points === checkWord.length) {
            return
        } else {
            for (let j = 0; j < randomLetters.length; j++) {
                if (checkWord[i] === randomLetters[j]) {
                    points++
                    break;
                }
            }
        }
    }
    if (points === checkWord.length) {
        console.log(true)
    } else console.log(false)
}

scramble('rkqodlw', 'world')
// finished
console.clear()

// ----------5-kyu----------5-kyu----------5-kyu----------5-kyu----------5-kyu----------
// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
// ----------5-kyu----------5-kyu----------5-kyu----------5-kyu----------5-kyu----------

// Your job is to write a function which increments a string, to create a new string.
//
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
//
// foo -> foo1
//
// foobar23 -> foobar24

// foo0042 -> foo0043
//
// foo9 -> foo10
//
// foo099 -> foo100

function incrementString(strng) {
    if (strng[strng.length-1] >= 0 || strng[strng.length-1] <= 9){
        let _str = strng.split('').reverse()

        let result = ''
        let number = []
        let howMuchZeroUntilNumber = 0
        let strWithoutNumbers = strng.split('').reverse()
        let oldNumber = 0
        let newNumberAfterCounting = 0

        for (let i = 0; i < _str.length; i++){
            if (+_str[i] >= 0){
                number.push(_str[i])
            }
            else break
        }
        number = number.reverse()
        for (let i = 0; i < number.length;i++){
            if (+number[i] === 0){
                howMuchZeroUntilNumber++
            }
            else break
        }
        for (let i = 0; i < number.length;i++){
            strWithoutNumbers[i] = ''
        }
        strWithoutNumbers = strWithoutNumbers.reverse().join('')
// 1) убрали все числа с конца строки 2) посчитали сколько нулей до начала чисел
        oldNumber = +number.join('')
        newNumberAfterCounting = +number.join('') + 1
        //  oldNumber используем чтобы сравнить стало ли новое число по длине больше прошлого, если да, удаляем 0

        if (String(oldNumber).split('').length !== String(newNumberAfterCounting).split('').length || number[0] == 0 && number[1] == 0 && number[2] == 0){
            console.log('we need to subtract 0 ')
            howMuchZeroUntilNumber--
        }
        //bellow добавляем нули в строку обратно и затем новое число
        result = strWithoutNumbers
        for (let i = 0; i < howMuchZeroUntilNumber;i++){
            result += '0'
        }
        result = result.split('')
        result.push(newNumberAfterCounting)
        result = result.join('')

        console.log('number from str:   '+number)
        console.log('zeroes until numbers:   '+howMuchZeroUntilNumber)
        console.log('str without number:   ' + strWithoutNumbers)
        console.log('new sum:   ' + newNumberAfterCounting)
        console.log('old number:   ' + oldNumber)
        console.log('our result:   '+ result)
        return result
    }
    else {return(strng + '1')}
}

incrementString("foobar000")//foobar001