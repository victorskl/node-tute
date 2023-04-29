# eslint-prettier-ts

Setup TypeScript project with ESLint and Prettier

```bash
# initialise node project
yarn init

# add key dev dependencies
yarn add --dev typescript eslint prettier

# integrate eslint & prettier -- https://prettier.io/docs/en/integrating-with-linters.html
yarn add --dev eslint-config-prettier eslint-plugin-prettier

# integrate eslint & ts -- https://typescript-eslint.io/getting-started/
yarn add --dev @typescript-eslint/parser @typescript-eslint/eslint-plugin

# initialise ts project
npx tsc --init

# initialise eslint config
npx eslint --init

# initialise prettier config -- https://prettier.io/docs/en/configuration.html
touch .prettierrc.json && webstorm .prettierrc.json

# [OPTIONAL]

# create prettier ignore -- https://prettier.io/docs/en/ignore.html
touch .prettierignore && webstorm .prettierignore 

# create eslint ignore
touch .eslintignore && webstorm .eslintignore
```

```bash
yarn lint
yarn prettier

yarn build

yarn lint
yarn prettier

yarn lint-fix
(OR)
yarn prettier-fix

node index

yarn clean
```

### ESLint

- https://eslint.org/docs/user-guide/getting-started
- https://eslint.org/docs/latest/use/configure/language-options

### TypeScript ESLint
- https://typescript-eslint.io/
- https://typescript-eslint.io/getting-started/

### Prettier

- https://prettier.io/docs/en/install.html
- https://prettier.io/docs/en/integrating-with-linters.html
- https://prettier.io/docs/en/configuration.html

### Articles

- https://blog.logrocket.com/linting-typescript-using-eslint-and-prettier/
- https://blog.logrocket.com/using-prettier-eslint-automate-formatting-fixing-javascript/
