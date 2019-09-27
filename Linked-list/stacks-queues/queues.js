'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }
  enqueue(element){

    let newNode = new Node(element);

    if(!this.front){
      this.front = newNode;
      this.rear = this.front;
    }else{
      this.rear.next = newNode;
      newNode.previous = this.rear;
      this.rear = newNode;
    }
  }
  dequeue(){
    let head = this.front;
    if(!head){
      return 'queue is empty';
    }
    this.front = this.front.next;
    this.front.previous = null;
    return head.value
  }
  peek(){
    return this.front.value
  }
}
module.exports = Queue;
