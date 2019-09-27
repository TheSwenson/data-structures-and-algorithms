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
  }
  push(element) {
    let head = this.top;
    let newNode = new Node(null, element)

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
      throw 'this stack is emptyyyyyyyyyyyyyyyyyyyyyyyyy'
    }
    this.top = head.next
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
