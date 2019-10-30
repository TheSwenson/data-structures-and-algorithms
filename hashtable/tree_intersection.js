'use strict';

function treeIntersect(treeOne, treeTwo) {
  let set = new Set();
  let repeatedArr = [];
  for(let i = 0; i < treeOne.length; i++){
    if (!set.has(treeOne[i])){
      set.add(treeOne[i]);
    }else {
      repeatedArr.push(treeOne[i]);
    }
  }
  for(let i = 0; i < treeTwo.length; i++){
    if (!set.has(treeTwo[i])){
      set.add(treeTwo[i]);
    }else {
      repeatedArr.push(treeTwo[i]);
    }
  }
  return repeatedArr;
}

module.exports = treeIntersect;
