/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits = digits.toString("").split(",").join('')
    digitsInt = BigInt(digits)
    digits = (digitsInt + 1n).toString().split("")
    return digits
};
