'use strict';

function insertArrayShift(val,arr){
  let index = arr.length - 1;
  while(val < arr[index]) {
    arr[index + 1] = arr[index];
    index--;
  }
  arr[index + 1] = val;
  return arr;
}

module.exports = insertArrayShift;
