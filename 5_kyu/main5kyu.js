// ----------5-kyu----------5-kyu----------5-kyu----------5-kyu----------5-kyu----------
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
//
//     Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
{
    function pigIt(str){
        let newStr = str.split(' ')
        let result = ''
        let newLetter = ''
        let arr = []
        let final = ''
        for (let i = 0; i < newStr.length; i++){
            result = newStr
            result = result[i].split('')
            newLetter = result[0]
            console.log(result[0])
            if (result[0] !== '!' && result[0] !== '?' && result[0] !== ',' && result[0] !== '.'){
                result[0] = ''
                arr.push(result.join('')+newLetter+'ay')
            }
            else {arr.push(result.join(''))}
        }
        console.log(arr)
        for (let i = 0; i < newStr.length; i++){
            if (i < newStr.length && i !== newStr.length - 1){
                final += arr[i] + ' '
            }
            else (
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
    let newArr =[]
    let zeros = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 0){
            zeros++
        }
        else newArr.push(arr[i])
    }
    for (let j = 0; j < zeros; j++){
        newArr.push(0)
    }
    console.log(newArr)
}

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
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
    for (let i = 0; i < checkWord.length; i++){
        if (points === checkWord.length){return}
        else {
            for (let j = 0; j < randomLetters.length; j++){
                if (checkWord[i] === randomLetters[j]){
                    points++
                    break;
                }
            }
        }
    }
    if (points === checkWord.length){
        console.log(true)
    }
    else console.log(false)
}
scramble('rkqodlw','world')
// finished
{
    function extractDomain(url) {
        console.log(url.replace(/^(?:https?:\/\/)?(?:[^\/]+\.)?([^.\/]+\.[^.\/]+).*$/, "$1"))
    }
    extractDomain('http://google.co.jp')
}