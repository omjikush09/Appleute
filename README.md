# Backend

###How To Deploy Locally

> Requriment:-
> [Node](https://nodejs.org/en/) lts version and [pnpm](https://pnpm.io/) package manaer.

Now clone the repo.

> git clone https://github.com/omjikush09/Backend.git

Go inside the folder and create the `.env` file and following variable, how to add variable given ahead.

```
DATABASE_URL=
JWT_SECRET=

```

[Get Database URL](https://www.prisma.io/docs/concepts/database-connectors/postgresql)

After adding this do following step.

> pnpm install

> npx prisma db push

> pnpm build

> pnpm start

Congrats you have Successfully run the Server.

if you wnant to run in Development mode then run

> pnpm dev
