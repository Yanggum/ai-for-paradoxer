
// @ts-ignore
import { Promise } from 'bluebird';
import type { User } from "@prisma/client";
import prisma from "./client";

const DEFAULT_USERS = [
  // Add your own user to pre-populate the database with
  {
    name: "Tim Apple",
    email: "tim@apple.com",
  },
] as Array<Partial<User>>;

// @ts-ignore
const seed = async () => {
  try {
    await Promise.all(
      DEFAULT_USERS.map((user) =>
        prisma.user.upsert({
          where: {
            email: user.email!,
          },
          update: {
            ...user,
          },
          create: {
            ...user,
          },
        })
      )
    );
  } catch (error) {
    console.error(error);
    //process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seed().then(r => console.log('Seed complete'));

// (async () => {
//
// })();
