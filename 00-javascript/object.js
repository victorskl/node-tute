// Run:
// node object.js

// Understanding Objects in JavaScript
// https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript

// An object in JavaScript is a data type that is composed of a collection of names or keys and values,
// represented in name:value pairs. The name:value pairs can consist of properties that may contain
// any data type — including strings, numbers, and Booleans — as well as methods,
// which are functions contained within an object.

// Initialize object literal with curly brackets
const objectLiteral = {
    id: 1,
    name: "literal",
    key: "value",
    created: true,
};
console.log(objectLiteral);


// Initialize object constructor with new Object
const objectConstructor = new Object();
objectConstructor.id = 2;
objectConstructor.name = "constructor";
objectConstructor.key = "value";
objectConstructor.created = true;
console.log(objectConstructor);


// Initialize gimli object
const gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function() {
        return `Hi, my name is ${this.name}!`;
    },
};
console.log(gimli);


// Accessing Object Properties
// There are two ways to access an object's properties:
//  Dot notation: .
//  Bracket notation: []

// Retrieve the value of the weapon property using .
console.log(gimli.weapon);

// Retrieve the value of the race property using []
console.log(gimli['race']);

console.log(gimli.greet());


// Adding and Modifying Object Properties
// In order to add a new property to an object, you would assign a new value to a property with the assignment operator (=).

// Add new age property to gimli using .
gimli.age = 139;

// Add new age property to gimli using []
gimli['class'] = "knight";

console.log(gimli);


// Add new fight method to gimli
gimli.fight = function() {
    return `Gimli attacks with an ${this.weapon}.`;
};
console.log(gimli.fight());


// Update weapon from axe to battle axe
gimli.weapon = "battle axe";
console.log(gimli);


// Removing Object Properties
// In order to remove a property from an object, you will utilize the delete keyword.
// delete is an operator that removes a property from an object.

// Remove weapon from gimli
console.log(delete gimli.weapon); // output true
console.log(gimli);


// Looping Through Object Properties
// JavaScript has a built-in type of for loop that is specifically meant for iterating over
// the properties of an object. This is known as the for...in loop.

// Iterate through properties of gimli
for (let key in gimli) {
    console.log(gimli[key]);
}

console.log('');

// We can also retrieve the property name itself using just the first variable in the for...in loop.
// Get keys and values of gimli properties
for (let key in gimli) {
    console.log(key.toUpperCase() + ':', gimli[key]);
}

console.log('');

// Another useful enumeration method is the Object.keys() method, which will return an array of the object's keys.
// Initialize method on gimli object to return property keys
const keys = Object.keys(gimli);
console.log(keys);
console.log(typeof keys);


console.log('\n');


// How To Use Object Methods in JavaScript
// https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript

//todo
