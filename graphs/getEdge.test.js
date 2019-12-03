const Graph = require('./graph');
const getEdge = require('./getEdge')

describe('Get Edge', () =>{
  it('will return cost of a flight between 2 cities', () =>{
    let graph = new Graph();
    let cities =['Iowa','Chicago'];
    graph.addNode('Chicago');
    graph.addNode('Iowa');
    graph.addEdge('Iowa','Chicago',2);
    graph.addEdge('Chicago','Iowa',2)


    expect(getEdge(graph,cities)).toBe(2);
  })
  it('will return 0 for no connections', ()=>{
    let graph = new Graph();
    let cities =['Iowa','Chicago'];
    graph.addNode('Chicago');
    graph.addNode('Iowa');

    expect(getEdge(graph,cities)).toBe(0);
  })
});

