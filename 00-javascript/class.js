// Understanding Classes in JavaScript
// https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript

// ECMAScript 2015, often referred to as ES6, introduced classes to the JavaScript language
// Classes in JavaScript do not actually offer additional functionality, and are often described as providing
// "syntactical sugar" over [prototypes and inheritance](see prototype.js) in that they offer a cleaner and more elegant syntax.

// Classes Are Functions - A JavaScript class is a type of function.

// Initializing a function with a function expression
const x = function() {}; // empty function
console.log(Object.getPrototypeOf(x));

// Initializing a class with a class expression
const y = class {};
console.log(Object.getPrototypeOf(y));

// The code declared with function and class both return a function [[Prototype]].
// With prototypes, any function can become a constructor instance using the new keyword.
const constructorFromFunction = new x(); // Initialize a constructor from a function
console.log(constructorFromFunction);

// This applies to classes as well.
const constructorFromClass = new y(); // Initialize a constructor from a class
console.log(constructorFromClass);

console.log();


// Defining a Class

// constructor.js
// Initializing a constructor function
function HeroFn(name, level) {
    this.name = name;
    this.level = level;
}

// Adding a method to the constructor
HeroFn.prototype.greet = function() {
    return `${this.name} says hello.`;
};

//---

// hero.js
// Initializing a class definition
class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }
}

const hero1 = new Hero("Varg", 1);
console.log("%s %s", hero1, typeof hero1);
console.log(hero1.greet());

            // Side track about prototype object
            console.log();

            let hero2 = {
                name: "M",
                level: 2,
            };
            console.log("%s %s", hero2, typeof hero2);
            try {
                console.log(hero2.greet()); // << TypeError: hero2.greet is not a function
            } catch (e) {
                console.log(e);
                console.log();
            }

            // hero2 is ad-hoc prototype object. JavaScript is prototype-based dynamically-typed at runtime language.
            // It does not require class blueprint prior to derive an object like Java.
            // A couple of way to expand an prototype object https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object
            // Example using object spread operator {...}
            hero2 = {
                ...hero2, // << kind of similar to Java Object Clone
                greet() {
                    return `${this.name} says hello.`;
                }
            };
            console.log(hero2.greet()); // hero2 now have greet() function
            // see object.js on more of this way of creating objects


// Extending a Class

// New constructor functions can be created from the parent using the call() method.
// In the example below, we will create a more specific character class called MageFn,
// and assign the properties of Hero to it using call(), as well as adding an additional property.

// Creating a new constructor from the parent
function MageFn(name, level, spell) {
    // Chain constructor with call
    HeroFn.call(this, name, level);
    this.spell = spell;
}

let mageFn = new MageFn('Lejon', 2, 'Magic Missile');
console.log("%s %s %s", mageFn.name, mageFn.level, mageFn.spell);

try {
    console.log(mageFn.greet()); // << TypeError: mageFn.greet is not a function. Same principal applied here as explained in hero2 prototype-based object.
} catch (e) {
    console.log(e);
    console.log();
}

// Similarly, we can use object spread operator to add/expand greet() function into mageFn object
mageFn = {
    ...mageFn,
    greet() {
        return `${this.name} says hello.`;
    }
};
console.log(mageFn.greet());


// With ES6 classes, the super keyword is used in place of call to access the parent functions.
// We will use extends to refer to the parent class.

// Creating a new class from the parent
class Mage extends Hero {
    constructor(name, level, spell) {
        // Chain constructor with super
        super(name, level);

        // Add a new property
        this.spell = spell;
    }
}

const hero3 = new Mage('hero3', 3, 'Magic Nuke');
console.log(hero3.name, hero3.level, hero3.spell, hero3.greet());


// see also object.js
