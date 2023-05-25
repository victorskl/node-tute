# NestJS

- https://github.com/nestjs/nest
- https://docs.nestjs.com/

```
mkdir 03-nest
cd 03-nest
```

- Install Nest CLI (NOTE: nest cli need to sit same level as yarn)
```
npm i -g @nestjs/cli
npm -g ls
which nest
ls -l $(which nest)
```

```
nest
```

- Create new nest app
```
nest new nest-ts --skip-git --skip-install --language TypeScript --package-manager yarn
cd nest-ts
yarn install
yarn run start
```

```
curl -s http://localhost:3000
Hello World!%
```

## TODO

- https://docs.nestjs.com/techniques/database
- https://docs.nestjs.com/recipes/crud-generator#crud-generator
- https://docs.nestjs.com/standalone-applications
- https://docs.nestjs.com/microservices/basics

> Quick reading ^^^ ... It seems like a bit heavy for Lambda/FaaS use case. 
> It is also self-contained system as a whole in its own eco-platform.
