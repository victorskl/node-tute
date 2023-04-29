// https://github.com/isaacs/node-glob
// npx tsc
// node io.glob

import { Glob, glob } from 'glob';

const asyncEntries = glob(['./sub/**']);
Promise.resolve(asyncEntries).then((resolvedEntries: string[]) => {
  console.log(resolvedEntries);
});

const streamListener = (entry: string) => {
  console.log(entry);
};

const streaming = glob.stream(['../00-module/**']);
streaming.on('data', streamListener);

const entries = glob.sync(['./node_modules/**']);
console.log(entries);

// ---

const g = new Glob('../00-hello/**', {});
Promise.resolve(g).then((globIter) => {
  for (const f1 of globIter) {
    console.log(f1);
  }
});

const g3 = new Glob('../00-typescript/**', {
  withFileTypes: true,
  maxDepth: 1,
});
g3.stream().on('data', (path) => {
  console.log(
    path.fullpath(),
    path.isDirectory()
    // path.readdirSync().map((e) => e.name)
  );
});

const g2 = new Glob('../00-javascript/**', g); // reuse `g` settings & caches, if any
for (const f2 of g2) {
  console.log(f2);
}
