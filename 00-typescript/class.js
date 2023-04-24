"use strict";
// Classes #
// TypeScript supports new features in JavaScript, like support for class-based object-oriented programming.
// Here we're going to create a Student class with a constructor and a few public fields.
// Notice that classes and interfaces play well together, letting the programmer decide on the right level of abstraction.
// Also of note, the use of public on arguments to the constructor is a shorthand that allows us to automatically create properties with that name.
// Classes in TypeScript are just a shorthand for the same prototype-based OO that is frequently used in JavaScript.
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
// @ts-ignore
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.middleInitial + " " + person.lastName;
}
// @ts-ignore
var user = new Student("Jane", "M.", "User");
document.body.textContent = greeter(user);
