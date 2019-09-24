'use strict'

function shift(array, value) {
  var midIndex = Math.ceiling (array.length / 2);
  var results = [];

  for(var i = 0; i <= array.length; i++){
    if ( i < midIndex){
      results.push(array[i]);
    } else if (i === midIndex){
      results.push(value);
    } else {
      if (i > midIndex) {
        results.push(array[i-1])
      }
    }
  }
}

shift();
