const insertArrayShift = require('./insertArrayShift');

describe('insert array shift', ()=>{
  it('will insert 3 into the array at the correct index',()=>{
    let arr =[1,2,4,5];

    expect(insertArrayShift(3,arr)).toEqual([1,2,3,4,5]);
  })
});
