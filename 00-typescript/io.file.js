"use strict";
// npx tsc
// node io.file
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// --- Determining file path
var path = __importStar(require("path"));
console.log(__dirname); // point to absolute path, from current dir of src
var absPath = path.join(__dirname, '');
console.log(absPath);
var myPath = path.join(__dirname, '../00-javascript');
console.log(myPath);
// --- Loading JSON file using Nodejs CommonJS style
var requiredCars = require('../00-javascript/js.json'); // ES5
console.log(requiredCars);
console.log(typeof requiredCars); // recall: every valid JSON is valid JavaScript Object
// --- Loading JSON file using ESM style import statement
var js_json_1 = __importDefault(require("../00-javascript/js.json")); // ES6, also note -- must be in string literal syntax
// TS2732: Cannot find module 'X'. Consider using '--resolveJsonModule' to import module with '.json' extension.
console.log(js_json_1.default);
console.log(typeof js_json_1.default);
// --- Bind to TypeScript Record type
var carRecords = require('../00-javascript/js.json'); // still loosely bounded
console.log(carRecords);
console.log(typeof carRecords);
var carResp = require('../00-javascript/js.json'); // strictly bounded
console.log(carResp);
console.log(typeof carResp);
var iCars = js_json_1.default; // TypeScript casting -- but didn't enforce the type anyway!
console.log(iCars);
console.log(typeof iCars);
// --- Using Node.js 'fs' module
var fs = __importStar(require("fs")); // @types/node
var fileBuffer = fs.readFileSync(myPath + '/js.json');
var carJsonParsed = JSON.parse(fileBuffer.toString('utf-8'));
console.log(carJsonParsed);
console.log(typeof carJsonParsed);
