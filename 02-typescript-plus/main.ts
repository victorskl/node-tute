// Global variables and functions avail under Node.js environment

// ^^^ https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-var-requires.md

// const fs = require("fs");  // incorrect syntax ^^^
import fs = require('fs'); // using ES5/commonjs style Node.js globally exported `require()` function
console.log(typeof fs);

import * as fsm from 'fs'; // using ES6/ESM style module import
console.log(typeof fsm);

console.log(__dirname); // dir relative to executing script
console.log(__filename); // executing script name

// console.log(process.env);
console.log(process.env.HOME); // print user home or system environment through exported Node `process` module
