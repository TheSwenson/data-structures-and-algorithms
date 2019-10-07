'use strict';
const Stack = require('./stacks');
const Queue = require('./queues')

let stack;
let queue;
beforeEach(() =>{
  stack = new Stack();
  queue = new Queue();
}
);
describe('stacks and queues',()=>{
  it('can add nodes to a stack', ()=>{
    stack.push(1);
    expect(stack.top.value).toBe(1)
  })
  it('can pop the first node',()=>{
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toBe(3);
    stack.pop();
    expect(stack.top.value).toBe(2)
  })
  it('can peek the firt node', ()=>{
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
  })
  it('adds a node to the queue', () =>{
    queue.enqueue(1);
    expect(queue.front.value).toBe(1);
    queue.enqueue(2);
    expect(queue.rear.value).toBe(2)
  })
  it('can dequeue from the queue', () =>{
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.front.value).toBe(1);
    queue.dequeue();
    expect(queue.front.value).toBe(2);
  })
  it('can peek the first node from the queue', ()=> {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
  })
})
