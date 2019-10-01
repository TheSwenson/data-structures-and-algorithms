'use strict';
const AnimalShelter = require('./fifo-animal-shelter')
let shelter;
beforeEach(() =>{
  shelter = new AnimalShelter();
}
);
describe('Fifo animal shelter', ()=>{
  it('adds animals into the queue for each type', ()=>{
    shelter.enqueue('dog');
    shelter.enqueue('dog');
    shelter.enqueue('cat');
    shelter.enqueue('cat');

    expect(shelter.queueDog.peek()).toBe('dog');
    expect(shelter.queueCat.peek()).toBe('cat')
  })
  it('removes the animal from the shelter', ()=>{
    shelter.enqueue('dog');
    shelter.enqueue('cat');
    shelter.dequeue('dog');

    expect(() => shelter.queueDog.peek()).toThrow();
  })
})
