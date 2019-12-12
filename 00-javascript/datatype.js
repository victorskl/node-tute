// Understanding Data Types in JavaScript
// https://www.digitalocean.com/community/tutorials/understanding-data-types-in-javascript

// Dynamic Typing
// JavaScript has dynamic data types, meaning that type checking is done at runtime rather than compile time.
// Python's data types are also dynamically typed. With dynamically typed languages, a variable of the same name
// can be used to hold different data types.

// defined as a variable by the `let` keyword
// note that `let` keyword keeps a given variable limited in scope
a = () => {
    let t = 16;
    console.log(typeof t); // t is a number
};
a();

a = () => {
    let t = "Teresa";
    console.log(typeof t); // t is a string
};
a();

function f() {
    let t = true;
    console.log(typeof t); // t is a Boolean
}
f();

let t;
console.log(typeof t); // t is undefined


// Numbers

// there is no separate designation for integers and floating-point numbers
let num1 = 93;
let num2 = 93.00;
console.log(num1);
console.log(num2);

let num3 = 987e8;       // 98700000000
console.log(num3);

let num4 = 987e-8;      // 0.00000987
console.log(num4);

let num5 = 999999999999999;     // remains as 999999999999999
console.log(num5);

let num6 = 9999999999999999;    // rounded up to 10000000000000000
console.log(num6);

// JavaScript number type also has three symbolic values available:
//     Infinity — a numeric value that represents a positive number that approaches infinity
//     -Infinity— a numeric value that represents a negative number that approaches infinity
//     NaN — a numeric value that represents a non-number, standing for not a number
let num7 = 5 / 0; // will return Infinity
console.log(num7);

let num8 = -5 / 0; // will return -Infinity
console.log(num8);

let x = 20 / "Shark"; // x will be NaN
console.log(x);

let y = 20 / "5";   // y will be 4
console.log(y);

let p = NaN;
let q = 37;
let r = p + q;  // r will be NaN
console.log(r);


console.log();

// Boolean
// Strings

// Arrays

let fish = ["shark", "cuttlefish", "clownfish", "eel"];
console.log(fish);
console.log(typeof fish);
console.log(fish.toString());

console.log();


// Objects

// The object literal syntax is made up of name:value pairs separated by colons with curly braces on either side { }. See object.js for more.
let sammy = {firstName:"Sammy", lastName:"Shark", color:"blue", location:"ocean"};
console.log(sammy);
console.log(typeof sammy);

console.log();


// Working with Multiple Data Types

let o = "Ocean" + 1 + 1; // concat
console.log(o);

let m = 1 + 1 + "Ocean"; // addition then concat
console.log(m);
