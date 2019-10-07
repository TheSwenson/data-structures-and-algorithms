'use strict';

function merge(listUno, listDos){
  let listUnoCurrent = listUno.head;
  let listDosCurrent = listDos.head;
  let index1 = 0;
  let index2 = 1;
  let merged = [];

  while(listDosCurrent !== null){
    if(index1 < index2){
      merged.push(listUnoCurrent.data);
      listUnoCurrent = listUnoCurrent.next;
      index1++;
    }
    else if(index1 === index2){
      merged.push(listDosCurrent.data);
      listDosCurrent = listDosCurrent.next;
      index2++;
    }else{
      return
    }
  }
  return merged.join(' ');
}

module.exports = merge;
