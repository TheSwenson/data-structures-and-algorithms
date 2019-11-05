'use strict';

function getEdge(graph, cities){

  let cost = 0;
  if (!graph.getNodes()[0].vertex === cities[0] ||!graph.getNodes()[1].vertex === cities[1]){
    return 'No Info on one of those cities oops!'
  }
  for(let i = 1; i<cities.length; i++){
    let routes = graph.getAdj(cities[i-1]).map(edge => edge.vertex);
    console.log(routes);
    if(!routes.includes(cities[i])){
      return cost
    }else{
      let cost = graph.getAdj(cities[i])[0].weight
      return cost;
    }
  }
}

module.exports = getEdge;
