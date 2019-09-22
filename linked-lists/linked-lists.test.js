const LinkedList = require('./linked-lists');

describe('LinkedList', () => {
  let list = new LinkedList;

  it('creates an empty linked list', () => {
    expect(list).toEqual({ head: null, size: 0 });
  })
})

describe('insert()', () => {
  let list = new LinkedList;
  list.insert(1);
  list.insert(7);


  it('adds an new node', () => {
    expect(list.size).toEqual(2);
    expect(list.head.data).toBe(7);
  })
  it('points head to first value', () => {
    expect(list.head.data).toEqual(7);
  })
})

describe('includes()', () => {
  let list = new LinkedList;
  list.insert(1);
  list.insert(2);
  list.insert(3);

  it('returns true only if value exists', () => {
    expect(list.includes(3)).toEqual(true);
  })
  it('returns false if value doesnt exist', () => {
    expect(list.includes(5)).toEqual(false);
  })
})

describe('toString()', () => {
  let list = new LinkedList;
  list.insert('hell?');
  list.insert('Da');
  it('returns all node values as a string', () => {
    expect(list.toString()).toEqual('Da hell?');
  })
});
