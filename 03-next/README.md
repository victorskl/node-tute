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
    ✔ Would you like to use ESLint? … No / Yes^
    ✔ Would you like to use Tailwind CSS? … No / Yes^
    ✔ Would you like to use `src/` directory? … No / Yes^
    ✔ Would you like to use App Router? (recommended) … No / Yes^
    ✔ Would you like to customize the default import alias (@/*)? … No^ / Yes
    Creating a new Next.js app in ~/Projects/github/node-tute/03-next/next-ts.
    
    Using yarn.
    
    Initializing project with template: app-tw
    
    
    Installing dependencies:
    - react
    - react-dom
    - next
    
    Installing devDependencies:
    - typescript
    - @types/node
    - @types/react
    - @types/react-dom
    - postcss
    - tailwindcss
    - eslint
    - eslint-config-next
```

```
cd next-ts
yarn install
yarn lint
yarn dev
yarn build
yarn start
```

```
open -a "Google Chrome" http://localhost:3000
```

```
curl -s http://localhost:3000/api/hello | jq
```
