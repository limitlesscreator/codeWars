// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//
//     Example:
// 348597 => [7,9,5,8,4,3]

let number = 348597

let numberStr = number.toString()

arrNumber = numberStr.split('')

let arrRevers = arrNumber.reverse()



let arrResult = arrRevers.map(Number)

console.log(arrResult)