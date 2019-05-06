// creating object 
const person = {
  name: 'default', 
  surname: 'default',
  des: function() {
    return `my name is ${this.name} ${this.surname}`
  }
}

// creating object
const anish = {
  name: 'anish',
  surname: 'rokka'
}

// anish object is prototype of person object
anish.__proto__ = person;


/* function constructor */

const Car = function() {
  this.name = "buggati";
  this.model = 2015;

}

let bugatti = new Car();

/* what's happening inside function constructor 

  step1: when we define function constructor with new keyword 
        and invoke Car()
        - new empty Car object is created

  step2: this.name, this.model adds the property to bugatti object 
  

*/ 

/* Prototype */ 

const Birds = function (name, age) {
  this.name = name;
  this.age = age;
}

Birds.prototype.getDes = function() {
  return `this bird name is ${this.name}`
}

let cucu = new Birds("cucu", 1);
let crow = new Birds("crow", 2);

