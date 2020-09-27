# Updating NodeJS Package Dependencies

_How to keep up Package Dependencies in NodeJS project_

1. List outdated packages using `outdated` command
2. Bump version and run `install` command

> 🙋‍♂️ And see [issue with NPM outdated packages as transitive dependencies](https://github.com/victorskl/node-tute/tree/master/01-npm-grunt/deps_issue) and, why you should be using Yarn...

## npm

```
npm list > deps.txt

npm list --depth=0

npm audit

npm outdated

Package                 Current  Wanted  Latest  Location
grunt                     1.0.4   1.2.1   1.2.1  hello
grunt-contrib-nodeunit    2.0.0   2.1.0   2.1.0  hello
grunt-contrib-uglify      4.0.1   4.0.1   5.0.0  hello
upper-case                1.1.3   1.1.3   2.0.1  hello

(bump the version on direct dependencies, then npm install)
npm install
```

- https://docs.npmjs.com/cli-commands/outdated.html
- https://stackoverflow.com/questions/16525430/npm-check-and-update-package-if-needed

## yarn

```
yarn list > deps.txt

yarn list --depth=0

yarn audit

yarn outdated

yarn outdated v1.22.4
info Color legend :
 "<red>"    : Major Update backward-incompatible updates
 "<yellow>" : Minor Update backward-compatible features
 "<green>"  : Patch Update backward-compatible bug fixes
Package                     Current Wanted Latest  Package Type           URL
@testing-library/jest-dom   4.2.4   4.2.4  5.11.1  dependencies           https://github.com/testing-library/jest-dom#readme
@testing-library/react      9.5.0   9.5.0  10.4.7  dependencies           https://github.com/testing-library/react-testing-library#readme
@testing-library/user-event 7.2.1   7.2.1  12.0.15 dependencies           https://github.com/testing-library/user-event#readme
minimist                    1.2.3   1.2.3  1.2.5   resolutionDependencies https://github.com/substack/minimist
✨  Done in 0.44s.


(bump the version on direct dependencies, then yarn install)
yarn install
```

- https://classic.yarnpkg.com/en/docs/cli/list
- https://classic.yarnpkg.com/en/docs/cli/outdated/
- https://karloespiritu.github.io/cheatsheets/yarn/

## Peer Dependencies

> It basically means _deal-yourself_ with the version!

- **TL;DR**: When you get peer dependencies warning like below, you probably have to include those packages, either as in [dependencies](https://docs.npmjs.com/configuring-npm/package-json#dependencies) or [devDependencies](https://docs.npmjs.com/configuring-npm/package-json#devdependencies) in your **_app_**.
- Because _package/lib developer_ say so! You are an _app developer_, ya know! 🤷‍♂️
- For example, 
    - Include `classnames@^2.2.6` as `dependencies` since our app use `primereact@4.2.2` as the main `dependencies` for UI kit.
    - Likewise, include `eslint@>=7.5.0` as `devDependencies` since you added `@babel/eslint-parser@7.11.5` as `devDependencies`. 

> 💁‍♂️ Here `eslint-plugin-react@7.20.6` say any `eslint` > 3 is good.  `eslint-plugin-prettier@3.1.4` says `eslint` > 5. `eslint-config-prettier@6.11.0` say > 3.14.1. And `@babel/eslint-parser@7.11.5` says must be > 7.5.0. Hence, you need to install `eslint@>=7.5.0`. i.e. the `@babel/eslint-parser@7.11.5` demands the least backward compatible eslint version i.e. the highest eslint version! If this broke elsewhere and, you need to bring down `eslint` version, then you need to get rid of `@babel/eslint-parser@7.11.5` as well as if `eslint` version go down from there.

```
yarn install
yarn install v1.22.5
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning " > primereact@4.2.2" has unmet peer dependency "classnames@^2.2.6".
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.17.1" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
warning " > @babel/eslint-parser@7.11.5" has unmet peer dependency "eslint@>=7.5.0".
warning " > eslint-config-prettier@6.11.0" has unmet peer dependency "eslint@>=3.14.1".
warning " > eslint-plugin-prettier@3.1.4" has unmet peer dependency "eslint@>=5.0.0".
warning " > eslint-plugin-react@7.20.6" has unmet peer dependency "eslint@^3 || ^4 || ^5 || ^6 || ^7".
[4/4] 🔨  Building fresh packages...
✨  Done in 28.14s.
```

- https://flaviocopes.com/npm-peer-dependencies/
- https://nodejs.org/es/blog/npm/peer-dependencies/
- https://classic.yarnpkg.com/en/docs/dependency-types/
- https://docs.npmjs.com/configuring-npm/package-json#peerdependencies
