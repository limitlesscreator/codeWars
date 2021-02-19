// Given a string of digits, you should replace any digit below 5 with '0'
// and any digit 5 and above with '1'. Return the resulting string.

let x = '45385593107843568'
let arrayofnumbestext = x.split('')
let arrayofnumbers = arrayofnumbestext.map(t => {
    if (t < 5){
        return('0')
    }
    else if (t >= 5){
        return ('1')
    }
    else {
        return t
    }
})
arrayofnumberstext = arrayofnumbers.join('')
console.log(arrayofnumberstext)