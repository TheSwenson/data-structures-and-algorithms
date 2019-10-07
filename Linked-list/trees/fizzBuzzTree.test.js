'use strict';

const Tree = require('./tree');
const fizzBuzz = require('./fizzBuzzTree');

let tree;
beforeEach(() =>{
  tree = new Tree();
});
describe('fizzbuzz!!!', () => {
  it('can add nodes to tree and change them to fizz or buzz', () =>{
    tree.insert(9);
    tree.insert(15);
    tree.insert(25);
    tree.insert(30);

    expect(fizzBuzz(tree).inOrder()).toEqual(['fizz','fizzbuzz','buzz','fizzbuzz']);
  });
  it('will return null when an empty tree is passed in', ()=>{

    expect(fizzBuzz(tree).root).toBe(null);
  })
});
