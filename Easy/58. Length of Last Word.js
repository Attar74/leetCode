/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
		s = s.trim()
    let spaceIndex = s.lastIndexOf(" ")
    s = s.slice(spaceIndex+1)
    return s.length
};
