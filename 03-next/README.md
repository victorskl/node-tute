# NextJS

- https://nextjs.org/docs/getting-started
- https://nextjs.org/docs/basic-features/pages
- https://nextjs.org/docs/routing/introduction
- https://nextjs.org/examples

```
mkdir
cd 03-next
```

- Install Create Vite App `create-next-app` globally
```
yarn global add create-next-app
```

- Create a NextJS project scaffold with TypeScript
```
yarn create next-app --typescript

    ✔ What is your project named? … next-ts
    ✔ Would you like to use ESLint with this project? … No / Yes
    ✔ Would you like to use Tailwind CSS with this project? … No / Yes
    ✔ Would you like to use `src/` directory with this project? … No / Yes
    ✔ Would you like to use experimental `app/` directory with this project? … No / Yes
    ✔ What import alias would you like configured? … @/*
    Creating a new Next.js app in ~/Projects/github/node-tute/03-next/next-ts.
    
    Using yarn.
    
    Initializing project with template: default
        
    Installing dependencies:
    - react
    - react-dom
    - next
    - typescript
    - @types/react
    - @types/node
    - @types/react-dom
    - eslint
    - eslint-config-next

cd next-ts
yarn install
yarn dev
yarn build
yarn start
```

```
curl -s http://localhost:3000/api/hello
```
