const merge = require('./LL-merge');
const LinkedList = require('../../Linked-list/linked-lists')

describe('list merging', ()=>{
  it('returns a string of the merged arrays', ()=>{
    let list1 = new LinkedList;
    let list2 = new LinkedList;

    list1.insert(3);
    list1.insert(1);
    list2.insert(4);
    list2.insert(2);
    expect(merge(list1,list2)).toBe('1 2 3 4');
  })
});
