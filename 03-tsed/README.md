# Ts.ED

- https://github.com/tsedio/tsed
- https://tsed.io/getting-started/

```
mkdir 03-tsed
cd 03-tsed
```

- Install `@tsed/cli` (NOTE: `tsed` cli need to sit same level as yarn)
```
npm i -g @tsed/cli
npm -g ls
which tsed
ls -l $(which tsed)
```

```
tsed
```

- Create `tsed` app
```
mkdir tsed-ts
cd tsed-ts
```

```
tsed init .
? Choose the target platform: Express.js
? Choose the architecture for your project: Ts.ED
? Choose the convention file styling: Ts.ED
? Check the features needed for your project Database, Testing, Linter
? Choose a ORM manager TypeORM
? Which TypeORM you want to install? SQLite
? Choose unit framework Jest
? Choose linter tools framework EsLint
? Choose extra linter tools
? Choose the package manager: Yarn
↓ Write RC files [SKIPPED]
✔ Initialize package.json
✔ Install plugins
↓ Write RC files [SKIPPED]
✔ Initialize package.json
✔ Install plugins
✔ Load plugins
✔ Install plugins dependencies
✔ Generate project files
✔ Generate files for eslint
✔ Add dependencies
✔ Generate files for jest
✔ Generate typeorm:datasource spec file to 'datasources/SqliteDatasource.spec.ts'
✔ Generate TypeORM datasource file to 'datasources/SqliteDatasource.ts'
✔ Generate docker-compose configuration
✔ Install dependencies
↓ Add husky prepare task [SKIPPED]
✔ Generate barrels files
```

```
yarn install
yarn start
```

```
curl -s http://localhost:8083/rest/hello-world
hello%
```

## TODO

- https://tsed.io/getting-started/start-with-cli.html
- https://tsed.io/docs/providers.html
- https://tsed.io/docs/model.html
- https://tsed.io/docs/injection-scopes.html
- https://tsed.io/tutorials/typeorm.html
- https://tsed.io/tutorials/serverless.html
