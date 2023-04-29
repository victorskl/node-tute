// --- Determining file path

import * as path from 'path';

console.log(__dirname); // point to absolute path, from current dir of src

const absPath = path.join(__dirname, '');
console.log(absPath);

const myPath = path.join(__dirname, '../00-javascript');
console.log(myPath);
