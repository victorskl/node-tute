# Issue with NPM outdated packages as transitive dependencies

NodeJS NPM outdated packages as transitive dependencies issue in regard to security vulnerabilities and implications...

- GitHub security scan alerting [Alerts_victorskl_node-tute.pdf](Alerts_victorskl_node-tute.pdf). It is recommending to bump `diff >=3.5.0`. 

- 🙋‍♂️ Wait, we never use `diff` in [our app](https://github.com/victorskl/node-tute/blob/d51f6f7d29119c9d82b8a0b6b22c9c746d64294f/01-npm-grunt/package.json#L20) since day one. But yes, NPM will install them in [flat dependency manner](https://npm.github.io/how-npm-works-docs/npm3/how-npm3-works.html) -- [How_npm3_Works.pdf](How_npm3_Works.pdf), so okay. 🤷‍♂️

- Checking _frozen-resolved_ dependencies in `package-lock.json` and having found at [Line@622](https://github.com/victorskl/node-tute/blob/0122b5d971781285d6a064d92edca3baf873af3e/01-npm-grunt/package-lock.json#L622) i.e. _secondary_ `diff` package listed **flatten** as _primary_ dependency (hence GitHub security alert) as follows:

```
    ...
    "diff": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/diff/-/diff-1.4.0.tgz",
      "integrity": "sha1-fyjS657nsVqX79ic5j3P2qPMur8=",
      "dev": true
    },
    ...
```

- Checking dependency tree:
```
cd 01-npm-grunt
npm list > deps_issue/deps_before.txt
...

│     ├─┬ tap-mocha-reporter@3.0.9
│     │ ├── color-support@1.1.3 deduped
│     │ ├─┬ debug@2.6.9
│     │ │ └── ms@2.0.0
│     │ ├── diff@1.4.0
```

- So, as of 2020/07/28, this is how `diff` dependency pulled as in `devDependencies` block: [`grunt-contrib-nodeunit`][1] < [`nodeunit-x`][2] < [`tap`][3] < [`tap-mocha-reporter`][4] < [`diff`][5]

[1]: https://www.npmjs.com/package/grunt-contrib-nodeunit
[2]: https://www.npmjs.com/package/nodeunit-x
[3]: https://www.npmjs.com/package/tap
[4]: https://www.npmjs.com/package/tap-mocha-reporter
[5]: https://www.npmjs.com/package/diff

- Checking freshness of each of these packages, and found that all are quite up-to-date, except `nodeunit-x` which seemly last update was a year ago!

- This is one of the classic example of NPM transitive dependencies on very old outdated packages ends-up sandwich in-between.

- Popular way to fix this on NPM is, to put the package into [our app direct primary dependency](https://github.com/victorskl/node-tute/blob/14c623eaf6df029180c70ecb046aba77aab5eeff/01-npm-grunt/package.json#L20)!! YIKES!! 😱
    - In `package.json`, add:
    ```
      "dependencies": {
        "upper-case": "^2.0.1",
        "diff": "^4.0.2"
      },
    ```
    
    - Then, `npm install`, and observe [Line@833](https://github.com/victorskl/node-tute/blob/14c623eaf6df029180c70ecb046aba77aab5eeff/01-npm-grunt/package-lock.json#L833) of `package-lock.json` is now having:
    ```
        ...
        "diff": {
          "version": "4.0.2",
          "resolved": "https://registry.npmjs.org/diff/-/diff-4.0.2.tgz",
          "integrity": "sha512-58lmxKSA4BNyLz+HHMUzlOEpg09FV+ev6ZMe3vJihgdxzgcwZ8VoEEPmALCZG9LmqfVoNMMKpttIYTVG6uDY7A=="
        },
        ...
    ```
    
    - Doing so, it moves the `diff` version `1.4.0` into `tap-mocha-reporter` [Line@3507](https://github.com/victorskl/node-tute/blob/14c623eaf6df029180c70ecb046aba77aab5eeff/01-npm-grunt/package-lock.json#L3491) in `package-lock.json`: 
    ```
    ...
    "tap-mocha-reporter": {
      "version": "3.0.9",
      "resolved": "https://registry.npmjs.org/tap-mocha-reporter/-/tap-mocha-reporter-3.0.9.tgz",
      "integrity": "sha512-VO07vhC9EG27EZdOe7bWBj1ldbK+DL9TnRadOgdQmiQOVZjFpUEQuuqO7+rNSO2kfmkq5hWeluYXDWNG/ytXTQ==",
      "dev": true,
      "requires": {
        ...
        "diff": "^1.3.2",
        ...
      },
      "dependencies": {
        "diff": {
          "version": "1.4.0",
          "resolved": "https://registry.npmjs.org/diff/-/diff-1.4.0.tgz",
          "integrity": "sha1-fyjS657nsVqX79ic5j3P2qPMur8=",
          "dev": true
        },
    ...  
    ``` 
  
  - After `npm list > deps_issue/deps_after.txt` 

- ❌ This is what most folk do and works. However, IMHO it is **wrong** 🙅‍♂️. The thing is, 💁‍♂️
    - After a while later, performing another security sweep activity to our app and, raise the question: "**why/where did this `diff` package use in our app, again??**" and confused. 
    - It is difficult to recall the actual culprit package -- in this case `nodeunit-x` is being lag way behind. We rather should focus on solving this problematic package as source issue if that help.
    - Consider, this had done on few more like 10s/20s packages as workaround quick fix; and yes, eventually our app will become bloated-ware and, ends up a form of [dependency hell](https://en.wikipedia.org/wiki/Dependency_hell)!

- ✅ If it is on Yarn, this could use [Selective dependency resolutions](https://classic.yarnpkg.com/en/docs/selective-version-resolutions/) -- which seem to be the only sane (but not perfect) solution at the moment. So move onto Yarn and do that. At least, now you know that packages get listed in `resolutions` block are temporary security fixes. Then, you can buy some time to tackle on the actual issue -- fixing those badly maintain library packages that your app depends on.

- Read [The Frightening State of Security Around NPM Package Management](https://naildrivin5.com/blog/2019/07/10/the-frightening-state-security-around-npm-package-management.html) -- [also save as PDF](The_Frightening_State_of_Security_Around_NPM_Package_Management.pdf)
