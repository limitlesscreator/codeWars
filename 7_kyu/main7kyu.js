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
        } else if (arr[i] > 0 &&  max < arr[i]) {
            max = arr[i]
        }
    }
    let result = `${min} ${max}`
    console.log(result)

}