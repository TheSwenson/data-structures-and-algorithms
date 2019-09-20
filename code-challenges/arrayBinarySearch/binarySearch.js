'use strict'


function arrSearch(arr,val){

  let low = arr[0];
  let high = arr[arr.length-1]

  while(low <= high){
    let mid = Math.floor(high + low / 2);
    if(val<mid){
      high = mid -1
    }else if(val>mid){
      low = mid + 1
    }else{
      return 2
    }

  }
  return -1;
}

module.exports = arrSearch;
