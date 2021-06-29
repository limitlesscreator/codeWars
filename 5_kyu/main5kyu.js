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