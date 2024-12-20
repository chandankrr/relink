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

export const addAutomation = async (clerkId: string) => {
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

export const findAutomation = async (id: string) => {
  return await db.query.automationTable.findFirst({
    where: eq(automationTable.id, id),
    with: {
      keywords: true,
      trigger: true,
      posts: true,
      listener: true,
      user: {
        with: {
          subscription: true,
          integrations: true,
        },
      },
    },
  });
};

export const updateAutomation = async (
  id: string,
  update: { name?: string; description?: string; active?: boolean }
) => {
  return await db
    .update(automationTable)
    .set({
      ...(update.name !== undefined && { name: update.name }),
      ...(update.description !== undefined && {
        description: update.description,
      }),
      ...(update.active !== undefined && { active: update.active }),
    })
    .where(eq(automationTable.id, id))
    .returning();
};
