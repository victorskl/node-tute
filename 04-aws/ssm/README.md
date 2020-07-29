# ssm

Access AWS SSM Parameter Store through JavaScript SDK `aws-sdk` in NodeJS app

```
mkdir ssm
cd ssm
touch index.js
yarn init
yarn add aws-sdk
```

- Then start coding `index.js`

### Run
```
aws sso login --profile lab
export AWS_PROFILE=lab

node --version
v12.18.2

node index.js save
node index.js get
node index.js delete

node index.js save secured=false
node index.js get
node index.js delete
```

### ES6

> Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

- https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node
- https://flaviocopes.com/how-to-enable-es-modules-nodejs/
- https://blog.logrocket.com/es-modules-in-node-today/

### REF
- [Keep Your Secrets Safe with AWS Systems Manager Parameter Store and Node](https://www.codebyamir.com/blog/keep-your-secrets-safe-with-aws-systems-manager-parameter-store-and-nodejs)
