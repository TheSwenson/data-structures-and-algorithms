'use strict';

function leftJoin(mapOne, mapTwo){
  let results = [];
  mapOne.forEach((value, key) => {
    if(mapTwo.has(key)){
      let temp = mapTwo.get(key);
      results.push([key,value,temp])
    }else if(!mapTwo.has(key)){
      results.push([key,value,null])
    }
  });
  return results;
}


module.exports = leftJoin;
