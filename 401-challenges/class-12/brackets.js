'use strict';

function validateBrackets(str) {
  const stack = [];
  const openingBrackets = ['(', '[', '{'];
  const closingBrackets = [')', ']', '}'];
  const bracketPairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const topBracket = stack.pop();
      if (bracketPairs[topBracket] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// console.log(validateBrackets('{}')); // Output: true
// console.log(validateBrackets('{}(){}')); // Output: true
// console.log(validateBrackets('()[[Extra Characters]]')); // Output: true
// console.log(validateBrackets('(){}[[]]')); // Output: true
// console.log(validateBrackets('{}{Code}[Fellows](())')); // Output: true
// console.log(validateBrackets('[({}]')); // Output: false
// console.log(validateBrackets('(](')); // Output: false
// console.log(validateBrackets('{(})')); // Output: false


module.exports = { validateBrackets };
