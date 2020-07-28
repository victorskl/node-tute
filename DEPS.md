# Updating NodeJS Package Dependencies

_How to keep up Package Dependencies in NodeJS project_

1. List outdated packages using `outdated` command
2. Bump version and run `install` command
3. See [Issue with NPM outdated packages as transitive dependencies](https://github.com/victorskl/node-tute/tree/master/01-npm-grunt/deps_issue) -- why you should use Yarn...

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
