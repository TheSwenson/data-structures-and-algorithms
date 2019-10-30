'use strict';

const leftJoin = require('./leftJoin');

describe('Left join hash tables', () =>{
  it('can join two hastables based on having the same key', () =>{
    let testMapOne = new Map();
    let testMapTwo = new Map();

    testMapOne.set('fond','enamoured');
    testMapOne.set('wrath','anger');
    testMapOne.set('diligent','employed');
    testMapOne.set('outfit', 'garb');
    testMapOne.set('guide','usher');

    testMapTwo.set('fond','averse');
    testMapTwo.set('wrath','delight');
    testMapTwo.set('diligent','idle');
    testMapTwo.set('guide','follow');
    testMapTwo.set('flow','jam');

    expect(leftJoin(testMapOne,testMapTwo)).toStrictEqual([['fond','enamoured','averse'],['wrath','anger','delight'],['diligent','employed','idle'],['outfit','garb',null],['guide','usher','follow']]);


  })
});
