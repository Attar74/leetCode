/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbols = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    let sum = 0
    s.split("").map((character, i) => {
        sum += symbols[character]
        if(i!=0) {
            if(character=="V" || character=="X") {
                if(s[i-1] == 'I') {
                    sum -= symbols[s[i-1]]
                    sum -= symbols[character]
                    sum += (symbols[character]-symbols[s[i-1]])
                }
            }
            if(character=="L" || character=="C") {
                if(s[i-1] == 'X') {
                    sum -= symbols[s[i-1]]
                    sum -= symbols[character]
                    sum += (symbols[character]-symbols[s[i-1]])
                }
            }
            if(character=="D" || character=="M") {
                if(s[i-1] == 'C') {
                    sum -= symbols[s[i-1]]
                    sum -= symbols[character]
                    sum += (symbols[character]-symbols[s[i-1]])
                }
            }
        }
    })

    return sum
};
