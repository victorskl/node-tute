# node-tute

Node.js tutorials

### Node.js based development stack

There are 3 key things for the modern [Javascript](https://en.wikipedia.org/wiki/JavaScript) development stack that based around [Node.js](http://nodejs.org): ***Package Manager***, ***Task Runner*** and ***Module Bundler***.

Package Manager

- npm (nested dependency tree) `package.json`
- bower (flat dependency tree) `bower.json`
- yarn

Task Runner

- grunt (`Gruntfile.js` or `gruntfile.js` - case doesn't matter)
- gulp
- webpack

Module Bundler

- webpack
- (and the rest) SystemJS, RequireJS, Browserify

REF:

- https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f
- https://stackoverflow.com/questions/35062852/npm-vs-bower-vs-browserify-vs-gulp-vs-grunt-vs-webpack
- https://github.com/grab/front-end-guide


### Getting started

- Install Node.js [using NVM](https://github.com/nvm-sh/nvm). This should usually install [NPM package management](https://docs.npmjs.com/about-npm/) tooling as part of [the Node.js development stack](https://stackoverflow.com/questions/41675848/what-is-the-difference-between-node-js-runtime-and-npm-package-manager-options-w/41676076) distribution. So, make sure, you have `node` and `npm` commands available in your shell.

#### Hello from server-side javascript!

```
pushd 00-hello
node hello.js
node server.js
(CTRL+C)
popd
```

Reading:

- https://www.nodebeginner.org

### Introduction to NPM package dependency and Grunt tasks

#### tl;dr

```
pushd 01-npm-grunt

npm init
npm install grunt --save-dev
npm install upper-case --save
npm audit
node_modules/.bin/grunt --help
node_modules/.bin/grunt --tasks
node_modules/.bin/grunt test
node_modules/.bin/grunt minify
npm run minify
npm run test
npm run start
(CTRL+C)

popd
```

#### npm

```
npm -v

(create package.json file)
npm help init
npm init

npm help install

(install grunt-cli module globally)
npm install -g grunt-cli

(this also add upper-case module into package.json dependencies)
npm install upper-case

npm help list
npm list
npm -g list
```

NOTE: It is all about [`package.json`](https://docs.npmjs.com/files/package.json). TL;DR though. But at least, read about [devDependencies](https://docs.npmjs.com/files/package.json#devdependencies).


#### npx

> The npx command is just a convenient way of running a NPM module without installing it globally.

- https://www.npmjs.com/package/npx
- https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner
- https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm
- https://www.google.com/search?q=npx


#### grunt

Requires two files:

- `package.json`
- `Gruntfile.js`

> The easiest way to add Grunt and gruntplugins to an existing `package.json` is with the command `npm install <module> --save-dev`. Not only will this install `<module>` **locally**, but it will **automatically be added** to the `devDependencies` section, using a tilde version range.

```
npm install grunt-available-tasks --save-dev
grunt
grunt test
grunt minify
```

Reading:

- https://www.w3schools.com/nodejs/nodejs_npm.asp
- https://gruntjs.com/getting-started
- https://gruntjs.com/sample-gruntfile
- https://www.tutorialsteacher.com/nodejs/nodejs-local-modules
- [What is the purpose of Node.js module.exports and how do you use it?](https://stackoverflow.com/questions/5311334/what-is-the-purpose-of-node-js-module-exports-and-how-do-you-use-it)
- [In Node.js, how do I "include" functions from my other files?](https://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files)
- https://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js

