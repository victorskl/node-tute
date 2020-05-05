// eh, main()?

// Is there a “global function” or a “main function” in Javascript?
// https://stackoverflow.com/questions/35706884/is-there-a-global-function-or-a-main-function-in-javascript

// Why doesn't JavaScript need a main() function?
// https://stackoverflow.com/questions/9015836/why-doesnt-javascript-need-a-main-function

main('hello 2');  // stepwise code

function main(arg) {  // function declaration
    console.log(arg);
}

main('hello 1');  // stepwise code

console.log();


//--- Function declaration

function declaration() {
    // statements
}

//--- Function expression

// 1: Assigning the result to something
let x = function () {
    return 1;
};

function bar(fnExpr) {
    console.log(typeof fnExpr, fnExpr());
}
// 2: Passing the result into a function
bar(function() {
    return 'fnExpr';
});

// 3: Calling the function immediately
(function(){
})();

// 4: Also calling the function immediately (parens at end are different)
(function(){
}());

// 5: Also calling the function immediately
!function(){
}();

// 6: Syntax error, the parser needs *something* (parens, an operator like ! or
// + or -, whatever) to know that the `function` keyword is starting an *expression*,
// because otherwise it starts a *declaration* and the parens at the end don't make
// any sense (and function declarations are required to have names).
//function () {
//}();

// a named function expression
let f1 = function foo() {
};

console.log();

//---

// Arrow function expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

const a = () => { return typeof a};
console.log(a());

const b = (param) => { console.log(param) };
b('single parameter');

const c = param => { console.log(param) };
c('Parentheses are optional when there\'s only one parameter name');

// Destructuring within the parameter list is also supported
const f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
console.log(f()); // 6


// More on Functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
