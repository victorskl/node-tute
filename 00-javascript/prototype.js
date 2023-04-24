// Understanding Prototypes and Inheritance in JavaScript
// https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript

console.log(Object);

// JavaScript is a prototype-based language, meaning object properties and methods can be shared through generalized
// objects that have the ability to be cloned and extended. This is known as prototypical inheritance and differs from
// class inheritance. Among popular object-oriented programming languages, JavaScript is relatively unique,
// as other prominent languages such as PHP, Python, and Java are class-based languages, which instead define
// classes as blueprints for objects.

let x = {}; // syntactic sugar `let x = new Object();`

// Every object in JavaScript has an internal property called [[Prototype]]
// The double square brackets that enclose [[Prototype]] signify that it is an internal property,
// and cannot be accessed directly in code.

// To find the [[Prototype]] of this newly created object, we will use the getPrototypeOf() method.

console.log(Object.getPrototypeOf(x));

console.log(x.__proto__);  // LEGACY

console.log(x.__proto__.__proto__);

let y = []; // syntactic sugar `let y = new Array();`

console.log(y.__proto__);
console.log(y.__proto__.__proto__);
console.log(y.__proto__ === Array.prototype);
console.log(y.__proto__.__proto__ === Object.prototype);
console.log(Array.prototype.isPrototypeOf(y));
console.log(Object.prototype.isPrototypeOf(Array));
console.log(y instanceof Array);

// ---

function Hero(name, level) {
  this.name = name;
  this.level = level;
}

let hero1 = new Hero('Bjorn', 1);
console.log(hero1);

console.log(Object.getPrototypeOf(hero1));

// Add greet method to the Hero prototype
Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}

console.log(hero1.greet());

// It is a common practice in JavaScript to define methods on the prototype
// for increased efficiency and code readability.
