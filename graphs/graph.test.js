const Graph = require('./graph');

describe('Graph', () => {
  it('can create a graph', () =>{
    let testGraph = new Graph();

    expect(testGraph.size).toBe(0);
  })

  it('can add new new nodes to graph', ()=>{
    let testGraph = new Graph();

    testGraph.addNode('A');

    expect(testGraph.size).toBe(1);
  })

  it('can add vertices', ()=>{
    let graph = new Graph();
    let addition = graph.addNode('A');
    let addition2 = graph.addNode('B');

    expect(addition).toHaveProperty('A');
    expect(addition2).toHaveProperty('B');
  })
  it('can add edges and weights', ()=> {
    let graph = new Graph();
    graph.addNode('Chicago');
    graph.addNode('Iowa');
    graph.addEdge('Iowa','Chicago',2);
    expect(graph.getAdj('Iowa')[0].weight).toEqual(2);

  });
  it('can do a depth first traversal', () => {
    let graph = new Graph();
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');
    graph.addNode('E');
    graph.addEdge('A','B',1);
    graph.addEdge('A','C',1);
    graph.addEdge('C','D',1);
    graph.addEdge('D','E',1);


    expect(graph.depthFirst('A')).toEqual(['A','C','D','E','B'])

  })
})
