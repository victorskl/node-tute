## NPM package dependency and Grunt tasks

### tl;dr

```
npm init
npm install grunt --save-dev
npm install upper-case --save

npm audit
npm outdated

npm run test
npm run minify
npm run start
(CTRL+C)
```

### npm

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

Reading:

- NOTE: It is all about [`package.json`](https://docs.npmjs.com/files/package.json). TL;DR though. But at least, read about [devDependencies](https://docs.npmjs.com/files/package.json#devdependencies).
- https://www.w3schools.com/nodejs/nodejs_npm.asp

### npx

> The npx command is just a convenient way of running a NPM module without installing it globally.

- https://www.npmjs.com/package/npx
- https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner
- https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm
- https://www.google.com/search?q=npx


### grunt

Requires two files:

- `package.json`
- `Gruntfile.js`

> The easiest way to add Grunt and gruntplugins to an existing `package.json` is with the command `npm install <module> --save-dev`. Not only will this install `<module>` **locally**, but it will **automatically be added** to the `devDependencies` section, using a tilde version range.

```
npm install grunt-available-tasks --save-dev
npx grunt
npx grunt test
npx grunt minify
```

Reading:

- https://gruntjs.com/getting-started
- https://gruntjs.com/sample-gruntfile
