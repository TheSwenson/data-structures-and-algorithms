'use strict';
const validation = require('./array-validation');

describe('multi-bracket-input', ()=> {
  it('returns true if input is valid multi-bracket syntax', ()=>{
    let testString = '{[()]}';

    expect(validation(testString)).toBe(true);
  })
});
