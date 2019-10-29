'use strict';

const treeIntersection = require('./tree_intersection');
const Tree = require('../Linked-list/trees/tree')

describe('Tree Intersection', () =>{
  it('will return the repeated words from two trees', ()=>{
    let testTreeOne = new Tree();
    let testTreeTwo = new Tree();

    testTreeOne.insert(9);
    testTreeOne.insert(8);
    testTreeOne.insert(4);
    testTreeOne.insert(0);
    testTreeOne.insert(2);
    testTreeTwo.insert(1);
    testTreeTwo.insert(9);
    testTreeTwo.insert(0);
    testTreeTwo.insert(5);
    testTreeTwo.insert(7);

    expect(treeIntersection(testTreeOne.inOrder(),testTreeTwo.inOrder())).toStrictEqual([0,9]);
  })
  it('returns an empty array if no repeated values are found', () =>{
    let testTreeOne = new Tree();
    let testTreeTwo = new Tree();

    expect(treeIntersection(testTreeOne.inOrder(),testTreeTwo.inOrder())).toStrictEqual([]);
  })
});
