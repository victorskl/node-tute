# Express Framework

Center around Express framework tute

- http://expressjs.com
- https://www.npmjs.com/package/express

### Simple app

- Using [Express](https://en.wikipedia.org/wiki/Express.js) as app server framework for building backend web or API application and, integration test with [Mocha](https://mochajs.org) and [supertest](https://github.com/visionmedia/supertest).

```
pushd 01-simple
npm init
npm install express --save
npm install mocha --save-dev
npm install supertest --save-dev
npm audit
npm test
node_modules/.bin/mocha --exit
npm start
(CTRL+C)
popd
```

### Node.js Express app using WebStorm

- [File > New > Project... > Express](https://blog.jetbrains.com/webstorm/2014/01/getting-started-with-node-js-in-webstorm/)

```
pushd 02-webstorm
npm init
npm install
npm audit
npm start
(CTRL+C)
popd
```

### Express Generator

- https://www.npmjs.com/package/express-generator

```
npm install -g express-generator
which express
mkdir 03-generator
pushd 03-generator
express --version
express --git --no-view

   create : public/
   create : public/javascripts/
   create : public/images/
   create : public/stylesheets/
   create : public/stylesheets/style.css
   create : routes/
   create : routes/index.js
   create : routes/users.js
   create : public/index.html
   create : .gitignore
   create : app.js
   create : package.json
   create : bin/
   create : bin/www

   install dependencies:
     $ npm install

   run the app:
     $ DEBUG=03-generator:* npm start
```
