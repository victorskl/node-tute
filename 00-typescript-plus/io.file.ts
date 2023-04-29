// npx tsc
// node io.file

// --- Loading JSON file using Nodejs CommonJS style

const requiredCars = require('../00-javascript/js.json');  // ES5
console.log(requiredCars);
console.log(typeof requiredCars);  // recall: every valid JSON is valid JavaScript Object


// --- Loading JSON file using ESM style import statement

import importedCars from '../00-javascript/js.json';  // ES6, also note -- must be in string literal syntax
// TS2732: Cannot find module 'X'. Consider using '--resolveJsonModule' to import module with '.json' extension.

console.log(importedCars);
console.log(typeof importedCars);


// --- Bind to TypeScript Record type

const carRecords: { [key: string]: any } = require('../00-javascript/js.json');  // still loosely bounded
console.log(carRecords);
console.log(typeof carRecords);


// --- Bind to "contract" TypeScript Interface

interface Meta {
  link: string;
  next: string;
  page: number;
}

interface Car {
  id: number;
  name: string;
  created: string;
}

interface CarResponse {
  meta: Meta;
  results: Car[];
}

const carResp: CarResponse = require('../00-javascript/js.json');  // strictly bounded
console.log(carResp);
console.log(typeof carResp);

let iCars = importedCars as CarResponse;  // TypeScript casting -- but didn't enforce the type anyway!
console.log(iCars);
console.log(typeof iCars);


// --- Using Node.js 'fs' module

import * as fs from 'fs';  // @types/node

const fileBuffer = fs.readFileSync('../00-javascript/js.json');
const carJsonParsed = JSON.parse(fileBuffer.toString('utf-8'));
console.log(carJsonParsed);
console.log(typeof carJsonParsed);
