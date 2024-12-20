"use server";

import { asc, eq } from "drizzle-orm";

import { db } from "@/db/drizzle";
import { automationTable, userTable } from "@/db/schema";

export const getAutomations = async (clerkId: string) => {
  return await db.query.userTable.findFirst({
    where: eq(userTable.clerkId, clerkId),
    columns: {},
    with: {
      automations: {
        orderBy: asc(automationTable.createdAt),
        with: {
          keywords: true,
          listener: true,
        },
      },
    },
  });
};

export const insertAutomation = async (clerkId: string) => {
  const [user] = await db
    .select({ id: userTable.id })
    .from(userTable)
    .where(eq(userTable.clerkId, clerkId));

  if (!user) {
    throw new Error("User not found!");
  }

  return await db
    .insert(automationTable)
    .values({ userId: user.id })
    .returning();
};
