# 00-typescript-plus

Basic forms usage of some utilities written either in TypeScript or, JavaScript through [DefinitelyTyped](https://github.com/DefinitelyTyped)

- Quick start

```
yarn install
yarn clean
yarn build

node main
node mime
node io.file
node io.path
node sub/dirname
node io.lsdir
node io.glob
node io.fg
```

- Initialise TypeScript Project

```
yarn init
yarn add typescript --dev
npx tsc --init
```

- Start adding [Node.js type support](https://www.npmjs.com/package/@types/node) from DefinitelyTyped

```
yarn add @types/node --dev
npx tsc main
node main
```
