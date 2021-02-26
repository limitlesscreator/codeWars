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








