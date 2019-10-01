'use strict';

const Queue = require('../queues')

class AnimalShelter{
  constructor(){
    this.queueDog = new Queue();
    this.queueCat = new Queue();
  }
  enqueue(animal){
    if(animal === 'dog'){
      this.queueDog.enqueue(animal);
    }else if(animal === 'cat'){
      this.queueCat.enqueue(animal);
    }else{
      throw 'we don\'t accept those, Sorry!';
    }
  }
  dequeue(pref){
    if(pref === 'dog' ){
      return this.queueDog.dequeue();
    }else if(pref === 'cat'){
      this.queueCat.dequeue();
    }else{
      throw 'we don\'t have any of those, Sorry!';
    }
  }
}

module.exports = AnimalShelter;
