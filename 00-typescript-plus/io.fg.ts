// https://github.com/mrmlnc/fast-glob
// npx tsc io.fg.ts
// node io.fg

// import FastGlob from 'fast-glob';
// import fg from 'fast-glob';

import FastGlob = require('fast-glob');
import fg = require('fast-glob');

// Asynchronous
const asyncEntries = fg(['./sub/**'], { dot: true });
Promise.resolve(asyncEntries).then((resolvedEntries: string[]) => {
  console.log(resolvedEntries);
});

// Stream
const streaming = fg.stream(['../00-module/**']);
// https://nodejs.org/api/stream.html#class-streamreadable
streaming.on('data', (entry: string) => {
  console.log(entry);
});

// Synchronous
const entries = fg.sync(['./node_modules/**'], { dot: true });
console.log(entries);

console.log(typeof FastGlob);
console.log(FastGlob);
