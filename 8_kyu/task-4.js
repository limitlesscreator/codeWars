// We need a function that can transform a string into a number. What ways of achieving this do you know?
//
//     Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
let str = "-7"
let arr = str.split('')
let maping = arr.map(t => t)
let numbers = maping.join('')
let numbersall = Number(numbers)

console.log(numbersall)
