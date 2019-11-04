'use strict';

class Graph {
  constructor() {
    this.adjList = new Map();
    this.size = 0;
  }

  addNode(vrtx) {
    if(this.adjList.has(vrtx)) {
      throw 'already exists';
    }
    this.adjList.set(vrtx, []);
    let result = {};
    result[vrtx] = [];
    this.size++;
    return result;
  }

  addEdge(vrtx1, vrtx2, weight = null) {
    if(this.adjList.has(vrtx1) && this.adjList.has(vrtx2)) {
      this.adjList.get(vrtx1).push({vrtx: vrtx2, weight: weight});
      this.adjList.get(vrtx2).push({vrtx: vrtx1, weight: weight});
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
      obj['vrtx'] = key;
      obj['neighbors'] = value;
      result.push(obj);
    }
    return result;
  }

  getNeighbors(vrtx) {
    let neighbors = this.adjList.get(vrtx);
    return neighbors;
  }

  getSize() {
    return this.size;
  }

}

module.exports = Graph;
