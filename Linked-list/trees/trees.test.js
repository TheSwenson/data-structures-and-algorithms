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
