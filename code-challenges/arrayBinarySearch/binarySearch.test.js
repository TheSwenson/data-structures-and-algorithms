'use strict'

const binarySearch = require('./binarySearch')

describe ('binary search', ()=>{
    let arr = [0,1,2,3,4,5,6,7,8,9];
    it('returns 2 if value is found in the array', ()=>{
        expect(binarySearch(arr,2)).toBe(2);
        
    })
    it('returns -1 if value is not found', ()=>{
        expect(binarySearch(arr,13)).toBe(-1);
    })
})