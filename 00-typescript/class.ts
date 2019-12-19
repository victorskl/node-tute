// Classes #
// TypeScript supports new features in JavaScript, like support for class-based object-oriented programming.
// Here we're going to create a Student class with a constructor and a few public fields.
// Notice that classes and interfaces play well together, letting the programmer decide on the right level of abstraction.
// Also of note, the use of public on arguments to the constructor is a shorthand that allows us to automatically create properties with that name.
// Classes in TypeScript are just a shorthand for the same prototype-based OO that is frequently used in JavaScript.

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {   // contrast to Java: interface should not constitute to hold object instance mutable state, rather interfacing methods and/or final constants?
    firstName: string;
    lastName: string;
}

// @ts-ignore
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

// @ts-ignore
let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);

//todo
// json-object-mapper
// https://www.npmjs.com/package/json-object-mapper
