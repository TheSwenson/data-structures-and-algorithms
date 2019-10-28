'use strict';
const LinkedList = require('../linkedList/linked-list');
class Hashtable {
  constructor(buckets = 50) {
    this.array = this.fillBucket(buckets);
    this.buckets = buckets;
    this.items = 0;
  }
  fillBucket(buckets) {
    let array = [];
    for(let i = 0; i < buckets; i++) {
      array.push(new LinkedList);
    }
    return array;
  }
  hash(key, buckets = this.buckets) {
    let asciiSum = this.sumASCII(key);
    let hash = (asciiSum * 711 ) % buckets;
    return hash;
  }
  sumASCII(string) {
    let sum = 0;
    if (!string) {
      return sum;
    } else {
      for (let i = 0; i < string.length; i++) {
        sum += string.charCodeAt(i);
      }
      return sum;
    }
  }
  add(key, value) {
    let obj = {};
    obj[key] = value;
    let index = this.hash(key);
    this.array[index].insert(obj);
    this.items++;
  }
  get(key) {
    let index = this.hash(key);
    if (this.array[index].size === 0) {
      return undefined;
    }
    let node = this.array[index].head;
    while (node) {
      let index = Object.keys(node.value)[0];
      if(key === index) {
        return node.value[key];
      }
      node = node.next;
    }
  }
  contains(key) {
    let result = this.get(key)
    return result ? true: false;
  }
}
module.exports = Hashtable;





