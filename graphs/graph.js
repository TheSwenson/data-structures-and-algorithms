'use strict';
const Queue = require('../Linked-list/stacks-queues/queues')

class Graph {
  constructor() {
    this.adjList = new Map();
    this.size = 0;
  }

  addNode(vertex) {
    if(this.adjList.has(vertex)) {
      throw 'already exists';
    }
    this.adjList.set(vertex, []);
    let result = {};
    result[vertex] = [];
    this.size++;
    return result;
  }

  addEdge(vertex1, vertex2, weight = null) {
    if(this.adjList.has(vertex1) && this.adjList.has(vertex2)) {
      this.adjList.get(vertex1).push({vertex: vertex2, weight: weight});
      this.adjList.get(vertex2).push({vertex: vertex1, weight: weight});
    } else {
      throw 'Vertex not found!';
    }
  }

  getNodes() {
    if(this.size === 0) {
      return null;
    }
    let result = [];
    for(let [key, value] of this.adjList) {
      let obj = {};
      obj['vertex'] = key;
      obj['neighbors'] = value;
      result.push(obj);
    }
    return result;
  }

  getAdj(vertex) {
    let neighbors = this.adjList.get(vertex);
    return neighbors;
  }

  getSize() {
    return this.size;
  }

  breadthFirst(node){
    let visited = [];
    for (let i = 0; i < this.noOfVertices; i++)
      visited[i] = false;

    let queue = new Queue();

    visited[node] = true;
    queue.enqueue(node);

    while (!queue.isEmpty()) {

      let getElement = queue.dequeue();

      let getList = this.AdjList.get(getElement);

      for (let i in getList) {
        let neighbors = getList[i];

        if (!visited[neighbors]) {
          visited[neighbors] = true;
          queue.enqueue(neighbors);
        }
      }
    }
  }

}

module.exports = Graph;
