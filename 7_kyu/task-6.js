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

for (i = 0; i < lengthCC-4 ; i++){
    result.push('#')
}
 result.push(lastNumbers)
finelResult = result.join('')
console.log(finelResult)