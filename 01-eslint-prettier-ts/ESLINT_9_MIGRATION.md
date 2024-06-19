# ESLint 9 Migration Note

- https://eslint.org/docs/latest/use/migrate-to-9.0.0
- https://eslint.org/docs/latest/use/configure/migration-guide
- https://eslint.org/docs/latest/use/configure/ignore

```
npx @eslint/migrate-config .eslintrc.json

    Need to install the following packages:
    @eslint/migrate-config@1.1.0
    Ok to proceed? (y) y

    Migrating .eslintrc.json
    Also importing your .eslintignore file

    Wrote new config to ./eslint.config.mjs

    You will need to install the following packages to use the new config:
    - globals
    - @eslint/js
    - @eslint/eslintrc

    You can install them using the following command:

    npm install globals @eslint/js @eslint/eslintrc -D

    The following messages were generated during migration:
    - The 'node' environment is used, but the sourceType is 'module'. Using sourceType 'module'. If you want to use CommonJS modules, set the sourceType to 'commonjs'.
```

```
yarn add --dev globals @eslint/js @eslint/eslintrc -D
```

- If we do not need to maintain `.eslintrc.json` style config then we can also remove `@eslint/eslintrc`

```
yarn remove @eslint/eslintrc
```

## Typescript

- https://typescript-eslint.io/getting-started

```
yarn remove @typescript-eslint/eslint-plugin @typescript-eslint/parser

yarn add --dev eslint @eslint/js @types/eslint__js typescript typescript-eslint
```

## Prettier

- https://prettier.io/docs/en/integrating-with-linters.html
- https://github.com/prettier/eslint-config-prettier

```
yarn remove eslint-plugin-prettier
```
