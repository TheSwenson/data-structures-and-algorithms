'use strict';

const Queue = require('../stacks-queues/queues')

class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null

  }

  insert(data){
    let newNode = new Node(data);

    if(!this.root){
      this.root = newNode;
    } else{
      this.insertNewNode(this.root,newNode);
    }
  }
  insertNewNode(node, newNode){
    if(newNode.data < node.data){
      if(!node.left){
        node.left = newNode;
      }else
        this.insertNewNode(node.left, newNode);
    }else{
      if(!node.right){
        node.right = newNode;
      }else{
        this.insertNewNode(node.right,newNode);
      }
    }
  }
  preOrder(root = this.root, values = []){
    if(!this.root) return values;

    values.push(root.value);

    if (root.left) {
      this.preOrder(root.left, values);
    }
    if(root.right) {
      this.preOrder(root.right, values);
    }
    return values;
  }
  inOrder(root = this.root, values = []) {

    if(!this.root) return values;

    if (root.left) {
      this.inOrder(root.left, values);
    }
    values.push(root.data);
    if(root.right) {
      this.inOrder(root.right, values);
    }
    return values;
  }

  postOrder(root = this.root, values = []) {

    if(!this.root) return values;

    if (root.left) {
      this.postOrder(root.left, values);
    }
    if(root.right) {
      this.postOrder(root.right, values);
    }
    values.push(root.value);
    return values;
  }
  contains(data, node = this.root){
    if(!node){
      return false;
    } else if(data < node.data){
      return this.contains(data, node.left);
    } else if(data > node.data){
      return this.contains(data,node.right);
    } else{
      return true;
    }
  }
  breadth(root = this.root){
    let results = [];
    let queue = new Queue();
    queue.enqueue(root);
    if(this.root){
      while(queue.front){
        let node = queue.dequeue();
        if(node.left){
          queue.enqueue(node.left)
        }
        if(node.right){
          queue.enqueue(node.right)
        }
        results.push(node.data);
      }
      return results;
    }else{
      throw 'shit\'s on fire yo.';
    }
  }
}



module.exports = BinarySearchTree;

