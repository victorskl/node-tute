# Issue with NPM outdated packages as transitive dependencies

NodeJS NPM outdated packages as transitive dependencies issue in regard to security vulnerabilities and implications...

- GitHub security scan alerting: `Alerts_victorskl_node-tute.pdf`

- Checking `package-lock.json` and having:

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

- Checking deps tree:
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

- So, as of 2020/07/28: [`grunt-contrib-nodeunit`][1] < [`nodeunit-x`][2] < [`tap`][3] < [`tap-mocha-reporter`][4] < [`diff`][5]

[1]: https://www.npmjs.com/package/grunt-contrib-nodeunit
[2]: https://www.npmjs.com/package/nodeunit-x
[3]: https://www.npmjs.com/package/tap
[4]: https://www.npmjs.com/package/tap-mocha-reporter
[5]: https://www.npmjs.com/package/diff

- Checking freshness of each of these packages, and found that all are quite up-to-date, except `nodeunit-x` which seemly last update was a year ago!

- This is one of the classic example of NPM transitive dependencies on very old outdated packages ends-up sandwich in-between.

- If it is on Yarn, this could use [Selective dependency resolutions](https://classic.yarnpkg.com/en/docs/selective-version-resolutions/) -- which seem to be the only sane (but not perfect) solution at the moment.

- If it is on NPM, then sadly it needs to put it into the direct dependency graph! YIKES!!
    - In `package.json`, add:
    ```
      "dependencies": {
        "upper-case": "^2.0.1",
        "diff": "^4.0.2"
      },
    ```
    
    - Then, `npm install`, and observe Line@833 `package-lock.json` now having:
    ```
        ...
        "diff": {
          "version": "4.0.2",
          "resolved": "https://registry.npmjs.org/diff/-/diff-4.0.2.tgz",
          "integrity": "sha512-58lmxKSA4BNyLz+HHMUzlOEpg09FV+ev6ZMe3vJihgdxzgcwZ8VoEEPmALCZG9LmqfVoNMMKpttIYTVG6uDY7A=="
        },
        ...
    ```
    
    - Doing so, it moves the `diff` version `1.4.0` into `tap-mocha-reporter` Line@3507 in `package-lock.json`: 
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

- This is what most folk do and, IMHO is wrong. The thing is, after a while later, performing another security sweep activity to raise the question: "why/where do this `diff` package used in the app, again??". It is difficult to recall the actual culprit package (in this case `nodeunit-x` being lag behind). Consider, it had done on few packages like 10s-20s packages as workaround; and yes, eventually ends up [dependency hell](https://en.wikipedia.org/wiki/Dependency_hell)!

- Read [The Frightening State of Security Around NPM Package Management](https://naildrivin5.com/blog/2019/07/10/the-frightening-state-security-around-npm-package-management.html) -- [also save as PDF](The_Frightening_State_of_Security_Around_NPM_Package_Management.pdf)
