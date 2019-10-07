/* eslint-disable no-unused-vars */

'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  /**
   *
   * @param {*} data new node data
   */
  insert(data) {
    //let current = this.head;
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    //current = newNode;
    this.size++;
  }

  /**
   *
   * @param {*} value value to check for through list
   */

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let result = [];

    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }

    return result.join(' ');
  }
  /**
   *
   * @param {*} value value to insert at the end of a list
   */
  append(value) {
    let current = this.head;
    let newNode = new Node(value);
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
    this.size++;
  }
  /**
   *
   * @param {*} value value we're inserting before
   * @param {*} newValue new value we're goign to insert
   */
  insertBefore(value, newValue) {
    let current = this.head;
    if (this.includes(value)) {
      if (current.data === value) {
        this.insert(newValue);
      } else {
        while (current.next && current.next.data !== value) {
          current = current.next;
        }
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
      }
    }
  }
  /**
   *
   * @param {*} value value we're inserting after
   * @param {*} newValue new value we're inserting
   */
  insertAfter(value, newValue) {
    let current = this.head;
    if (this.includes(value)) {
      while (current.data !== value) {
        current = current.next;
      }
      let newNode = new Node(newValue);
      newNode.next = current.next;
      current.next = newNode;
      this.size++;
    }
  }
  /**
   *
   * @param {*} nthValue index that we're looking for in the linked list
   */
  fromTheEnd(nthValue) {
    let index = 0;
    let current = this.head;
    nthValue = (this.size - nthValue -1);
    while(index<nthValue){
      current = current.next;
      index++;
    }
    return current.data;

  }
  removeFirst(){
    const val = this.head.data;
    this.head = this.head.next;
    return val;

  }

}


module.exports = LinkedList;
