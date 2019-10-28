'use strict';
const createMap = require('./repeatedWord');
describe('repeated word hash', ()=>{
  it('returns the word if it is repeated', ()=>{
    let input = 'How now brown cow also have another cow';

    expect(createMap(input)).toBe('cow');
  })
  it('returns a string if no words are repeated', ()=>{
    let input = 'howdy there neighbor';

    expect(createMap(input)).toBe('No words repeated.');
  })
})
