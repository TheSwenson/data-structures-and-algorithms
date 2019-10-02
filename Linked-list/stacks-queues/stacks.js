'use strict';

class Node {
  constructor(next, value){
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.size = 0;
  }
  push(element) {
    let head = this.top;
    let newNode = new Node(null, element)
    this.size++;

    if(!head){
      this.top = newNode;
    }else{
      newNode.next = head;
      this.top =newNode;
    }

  }
  pop(){
    let head = this.top;

    if(!head){
      throw 'this stack is empty'
    }
    this.top = head.next
    this.size--;
    return head.value
  }
  peek(){
    let head = this.top;
    if(!head){
      throw 'no stack for you'
    }
    return this.top.value
  }
}

module.exports = Stack;
