"use strict";

function Animal(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  
  Animal.prototype.run = function(inc) {
    this.speed += inc;
    console.log(`${this.name} speed is ${this.speed}`);
  };

  Animal.comparedBySpeed = function(a1, a2) {
    return a1.speed - a2.speed;
  }
  
  function Rabbit(name, speed) {
    Animal.call(this, name, speed);
  }
  
  Rabbit.prototype = Object.create(Animal.prototype);
  Rabbit.prototype.constructor = Rabbit;
  
  Rabbit.prototype.hide = function() {
    console.log(`${this.name} hides`);
  };
  
  let rabbit = new Rabbit('Rabbit', 5);
  rabbit.run(10);
  rabbit.hide();

  let rabbit2 = new Rabbit('Rabbit2', 10);
  rabbit2.run(15);
  rabbit2.hide();
console.log( Animal.comparedBySpeed(rabbit, rabbit2) );