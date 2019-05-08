/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding: 
     "this" refers to the object to the left of the dot, when the function is invoked by a preceding dot
* 2. Explicit binding
     If there is no dot preceding the function, this is defined when the .call(), .bind(), or .apply() methods is invoked
* 3. New binding
     When a function is called with "new" keyword, "this" is referencing the new object that is being created
  4. Global/window binding
     Occurs in the global context where the value of "this" is the window/console object (when none of the other 3 principles apply).

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function saySomething() {
  console.log(`There are ${this.num} Pokemons in my house`);
}

window.num = 50;
saySomething();   

// Principle 2

// code example for Implicit Binding
let animal = {
  name: "guinea pig",
  sound: "wheek",
  speak: function() {
    console.log(`${this.sound} I am a ${this.name}`);
  }
}

animal.speak();

// Principle 3

// code example for New Binding
function User(name, password) {
  this.name = name,
  this.password = password,
  this.access = function () {
    if (this.password.length > 8) {
      return true;
    } else {
      return false;
    }
  }
}

const user1 = new User('Pikachu', '123490');
console.log(user1.name);
console.log(user1.password);
console.log(user1.access());

// Principle 4

// code example for Explicit Binding
const myObj = {
  name: "Penny",
  adjective: "weird",
  verb: "eat"
}

const citiesLivedIn = ['New York City', 'San Diego'];

function aboutMe(city1, city2){
  return `Hi! My name is ${this.name}. I am ${this.adjective} and I love to ${this.verb}. I lived in ${city1} and ${city2}.`
}

console.log(aboutMe.call(myObj, ...citiesLivedIn));