const LinkedList = require('./linked-lists');
let list;
beforeEach(() =>{
  list = new LinkedList();
}
);
describe('tests for linked lists', ()=> {

  it('creates an empty linked list', () => {
    expect(list).toEqual({ head: null, size: 0 });
  })


  it('adds an new node', () => {
    list.insert(1);
    list.insert(7);
    expect(list.size).toEqual(2);
    expect(list.head.data).toBe(7);
  })
  it('points head to first value', () => {
    list.insert(7);
    expect(list.head.data).toEqual(7);
  })

  it('returns true only if value exists', () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.includes(3)).toEqual(true);
  })
  it('returns false if value doesnt exist', () => {
    expect(list.includes(5)).toEqual(false);
  })

  it('returns all node values as a string', () => {
    list.insert('hell?');
    list.insert('Da');
    expect(list.toString()).toEqual('Da hell?');
  })
  it('tests if new node is appended', () =>{
    list.insert(2);
    list.insert(1);
    list.append(3)

    expect(list.size).toEqual(3);
    expect(list.toString()).toEqual('1 2 3');
  })
  it('can add a new node before value', ()=>{
    list.insert(4);
    list.insert(3);
    list.insert(1);
    list.insertBefore(3,2);

    expect(list.size).toEqual(4);
    expect(list.toString()).toEqual('1 2 3 4')
  })
  it('can add a new node after value', ()=>{
    list.insert(4);
    list.insert(3);
    list.insert(1);
    list.insertAfter(1,2);

    expect(list.size).toEqual(4);
    expect(list.toString()).toEqual('1 2 3 4')
  })
})

