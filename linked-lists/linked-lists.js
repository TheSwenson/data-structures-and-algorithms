/* eslint-disable no-unused-vars */

'use strict';

class Node
{
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

  insert(data) {
    let current = this.head;
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    current = newNode;
    this.size++;
  }

  includes(value) {
    let current = this.head;
    while (current) {
      console.log(current)
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
}

module.exports = LinkedList;
