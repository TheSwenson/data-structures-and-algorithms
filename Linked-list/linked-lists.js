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
    //let current = this.head;
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    //current = newNode;
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
  append(value){
    let current = this.head;
    let newNode = new Node(value)
    while(current.next !==null){
      current = current.next;
    }
    current.next = newNode;
    this.size++;
  }
  insertBefore(value, newValue){
    let current = this.head;
    if(this.includes(value)){
      if(current.data===value){
        this.insert(newValue)
      }else {
        while(current.next && current.next.data !== value){
          current = current.next;
        }
        console.log(current); // 1, 3
        let newNode = new Node(newValue)
        newNode.next = current.next;
        current.next = newNode;
        this.size++
      }
    }
  }
  insertAfter(value, newValue){
    let current = this.head;
    if(this.includes(value)){
      while(current.data !== value){
        current = current.next;
      }
      let newNode = new Node(newValue)
      newNode.next = current.next;
      current.next = newNode;
      this.size++
    }
  }
}

module.exports = LinkedList;
