/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let globalCommon = ""
    if(strs.length >= 1 && strs.length <= 200) {
        let isAllRoundInCommon = true
        // step 1 => find short str length 
        let short_str_length = strs[0].length
        strs.map ((str) => {
            if(str.length < short_str_length) {
                short_str_length = str.length
            }
        })

        //step 2 => loop in each char to validate is it all equal in wach index or not
        for (let r = 0; r < short_str_length; r++) {
            let  char = ""
            strs.map((str) => {
                if(!char.length) {
                    char = str[r]
                } else if(char != str[r]) {
                    isAllRoundInCommon = false
                }
        })
            if(isAllRoundInCommon){
                globalCommon += char
            } else {
                break
            }
        }
        
    }
    return globalCommon
};
