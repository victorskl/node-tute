# 03-react

Center around [ReactJS](https://reactjs.org) frontend user interface framework. 

Typically, bootstrap with `create-react-app` (CRA) toolchain for SPA:
- https://reactjs.org/docs/create-a-new-react-app.html
- https://github.com/facebook/create-react-app

```
npm init react-app 00-boiler
(OR)
yarn create react-app 00-boiler

npx create-react-app 00-plate --use-npm  (!!AVOID THIS!!)
```

> NOTE: 
> * One should better use [Vite](../03-vite).
> * If it must be bootstrapped with CRA for some crazy reason then go with `yarn`.
> * CRA + `npm` = _hopeless!_

### 00-eject

_Better do ejection from the start of the Project. Performing eject "mid-flight" is like shooting-your-own-feet!_

```
yarn create react-app 00-eject
cd 00-eject
yarn test
yarn start
yarn eject
```
