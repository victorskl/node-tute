# node-tute

So little time, so many thing to learn!

### Node based Dev Stack

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


### Installing the Node

```
brew search node
brew install node
node -v
npm -v
```

#### Downgrading the Node

```
brew install node@6
brew unlink node
brew link node@6
npm install -g npm@5.3.0
node -v
npm -v
```


### Node itself

```
cd node-tute
cd hello/src
node hello.js
cd ..
npm start (or node server.js)
(ctrl+c to halt)
open -a Safari http://localhost:8888
(from another terminal tab)
```

REF:

- https://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js
- https://www.nodebeginner.org


### NPM

```
npm -v
npm install -g grunt-cli
(install module globally)
npm help init
npm init
(create package.json file)
npm help install
npm install upper-case
(this also add upper-case module into package.json dependencies)
node uc-server.js
open -a Safari http://localhost:8080
```

NOTE: It is all about [`package.json`](https://docs.npmjs.com/files/package.json). TL;DR though. But at least, read about [devdependencies](https://docs.npmjs.com/files/package.json#devdependencies).

REF:

- https://www.w3schools.com/nodejs/nodejs_npm.asp


### Grunt

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

REF:

- https://gruntjs.com/getting-started

