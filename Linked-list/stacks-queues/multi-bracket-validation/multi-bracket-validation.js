'use strict';
const Stack = require('../stacks');

const validator = function(input){
  const stack = new Stack();
  for(let i = 0; i < input.length; i++){
    if(input[i] === '('|| input[i] === '{' || input[i] === '['){
      stack.push(input[i]);
    }
    else if(input[i] === ')'|| input[i] === '}' || input[i] === ']'){
      let stackPop = stack.pop();
      if((stackPop !== '(' && input[i] === ')') ||
         (stackPop !== '{' && input[i] === '}') ||
         (stackPop !== '[' && input[i] === ']')){
        return false;
      }
    }
  }
  return true;
}

module.exports = validator;
