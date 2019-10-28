'use strict';

function createMap(input) {
  let set = new Set();
  let arr = input.split(' ');
  for(let i = 0; i < arr.length; i++){
    if (!set.has(arr[i])){
      set.add(arr[i]);
    }else {
      return arr[i];
    }
  }
  return 'No words repeated.';
}

module.exports = createMap;

