'use strict';
const validator
const arr = [1,2,3,4]
function reverseArray(arr) {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
  }
console.log(reverseArray(arr));