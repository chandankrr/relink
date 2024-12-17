"use server";

import { eq } from "drizzle-orm";

import { db } from "@/db/drizzle";
import { subscriptionTable, userTable } from "@/db/schema";

export const findUser = async (clerkId: string) => {
  return await db.query.userTable.findFirst({
    where: eq(userTable.clerkId, clerkId),
    with: {
      subscription: true,
      integrations: {
        columns: {
          id: true,
          token: true,
          expiresAt: true,
          name: true,
        },
      },
    },
  });
};

export const createUser = async (
  clerkId: string,
  firstname: string,
  lastname: string,
  email: string
) => {
  // Create user
  const [createdUser] = await db
    .insert(userTable)
    .values({ clerkId, firstname, lastname, email })
    .returning();

  // Create associated subscription
  await db.insert(subscriptionTable).values({ userId: createdUser.id });

  return {
    id: createdUser.id,
  };
};
