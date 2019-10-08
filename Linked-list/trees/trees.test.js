'use strict';

const Tree = require('./tree')

let tree;
beforeEach(() =>{
  tree = new Tree();
}
);
describe('binary search tree', () => {
  it('places the values into the tree', () =>{
    tree.insert(1);

    expect(tree.root.data).toBe(1);
    expect(tree.root.right).toBe(null);
  })
  it('can find a value inside the tree', () =>{
    tree.insert(1);
    tree.insert(2);
    tree.insert(3);
    tree.insert(4);

    expect(tree.contains(1)).toBe(true);
    expect(tree.contains(5)).toBe(false);
  })
})
describe('breadth first tree traversal', () =>{
  it('can return array with breadth traversal', () =>{
    tree.insert(20);
    tree.insert(5);
    tree.insert(7);
    tree.insert(39);
    tree.insert(16);
    tree.insert(24);
    tree.insert(45);

    expect(tree.breadth()).toEqual([20,5,39,7,24,45,16])
  })
  it('will throw if given an empty tree', () =>{

    expect(() => tree.breadth()).toThrow('shit\'s on fire yo');
  })
})
