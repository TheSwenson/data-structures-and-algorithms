'use strict';

const validator = (input) => {
  const validArrInput = [];
  const validArrOutput = [];

  for( let i = 0; i<= input.length; i++){
    if(input[i] === '('|| input[i] === '{' || input[i] === '['){
      validArrInput.push(input[i]);
    }
    if(input[i] === ')'|| input[i] === '}' || input[i] === ']'){
      validArrOutput.push(input[i])
    }
    validArrOutput.reverse();

  }
  for( let i = 0; i<= validArrInput.length; i++){
    if(validArrInput[i] === '(' && validArrOutput[i] === ')' || validArrInput[i] === '{' && validArrOutput[i] === '}' || validArrInput[i] === '[' && validArrOutput[i] === ']'){
      return true;
    }else return false;
  }
}
module.exports = validator;
