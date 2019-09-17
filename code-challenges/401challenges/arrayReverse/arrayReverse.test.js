'use strict';

const validator = require('../arrayReverse.js');

describe('expect the array input to be reversed', () => {


    it ('reverse', ()=>{
        let arr = [1,2,3,4];
        expect(validator.reverseArray(arr)),toEqual(Array.reverse(arr));

})
});