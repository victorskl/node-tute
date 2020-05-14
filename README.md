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
- https://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js
