/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(typeof(x) != "number" || x < 0 || x > Math.pow(2, 31)) 
        return false
    const myArray = x.toString().split(''); //convert number into string then into array
    const reversed = [...myArray].reverse(); // get reversed array
    if(JSON.stringify(myArray)==JSON.stringify(reversed)) { //compare 2 arrays 
        return true
    }
    return false
};
