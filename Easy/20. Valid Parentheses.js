/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	const openedBrackets = ['{', '[', '(']
    let Stack = ''
    if(s.length>=2 && validString(s) && s.length%2==0) {
      for(let c in s) {
        if(openedBrackets.includes(s[c])) {
        	Stack+=s[c]
        } else {
        	if(isCLosedBrackets(s[c]) != Stack[Stack.length-1]) {
          	return false
            break
           } else {
           	 Stack = Stack.slice(0,-1)
           }
        }
      }
      return !Stack.length ? true : false
    }
    return false
};

const isCLosedBrackets = ((openBrackets) => {
	switch(openBrackets) {
  	case ')': return '('
    case '}': return '{'
    case ']': return '['
    default: ''
  }
})


const validString = ((input) => {
		const validChar = "()[]{}"
    for(let s in input) {
        if(!validChar.includes(input[s])){
            return false
            break
        }
    }
    return true
})
