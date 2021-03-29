// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
//     The output should be two capital letters with a dot separating them.
//
//     It should look like this:
//
// Sam Harris => S.H
//
// Patrick Feeney => P.F

let name = "fam rarris"
let arrName = name.split(' ')
console.log(arrName)

let mapping = arrName.map( (m) => m.slice(0,1).toUpperCase())
console.log(mapping)

let resultName = mapping.join('.')
console.log(resultName)








