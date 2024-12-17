"use server";

import { eq } from "drizzle-orm";

import { db } from "@/db/drizzle";
import { automationTable, userTable } from "@/db/schema";

export const createAutomation = async (clerkId: string) => {
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
