# NestJS Todo App

This app is made for learning the Nest.js framework.

# Configure and deploy

1. First, you need to install the packages

```bash
npm i
# or with yarn
yarn
```

2. Create an `.env` file with the `DATABASE_URL` variable. Make sure you include your database url

3. You can use with Prisma DBMS like MySQL/MariaDB, PosgreSQL, MongoDB, CockroachDB, etc. If you want to use something other than MongoDB, you can edit the `prisma/scema.prisma` file like this

```prisma
...
datasource db {
  provider = "postgesql"
  // provider = "mongodb"
  url = env("DATABASE_URL")
}
...
```

3. Now you need to push the Prisma scheme into database. To do this you need to run it in your terminal:

```bash
yarn prisma db push
```

4. Okay, you have done the first 3 steps. You can run some tests of database connection and manipulations (creating tests in progress, but some basic tests already done)

```bash
yarn test
```

5. Now you're ready to launch the application.

- To run the application in development mode, execute the command

```bash
yarn run start:dev
```

- To build the application, run

```bash
yarn run build
```

After building you can launch app using

```bash
yarn run start:prod
```

# Todo

[ ] Complete coding tests

[ ] Make documentation

[ ] Adding an authentication system

[ ] Developing the client (optional)
