// TypeScript in 5 minutes
// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
// Compile:
// tsc greeter.ts

// Type annotations # person: >> string <<
// Type annotations in TypeScript are lightweight ways to record the intended contract of the function or variable.
// function greeter(person) { << 'person' does not infer any type notion here, this is ok in JavaScript as it is dynamically-typed at runtime
// @ts-ignore
function greeter(person: string) { // << typescript makes it strong annotation about type 'string' here
    return "Hello, " + person;
}

// @ts-ignore
let user = "Jane User";
// let user = [0, 1, 2]; // code static analysis is possible in TS, it will raise TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.

document.body.textContent = greeter(user);
