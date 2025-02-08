"use server";

import { asc, eq } from "drizzle-orm";

import { db } from "@/db/drizzle";
import {
  automationTable,
  listenerTable,
  triggerTable,
  userTable,
} from "@/db/schema";

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

export const addListener = async (
  automationId: string,
  listener: "SMARTAI" | "MESSAGE",
  prompt: string,
  reply?: string
) => {
  await db
    .insert(listenerTable)
    .values({
      automationId,
      listener,
      prompt,
      commentReply: reply,
    })
    .returning();

  return await db.query.automationTable.findFirst({
    where: eq(automationTable.id, automationId),
    with: {
      listener: true,
    },
  });
};

export const addTrigger = async (automationId: string, trigger: string[]) => {
  if (trigger.length === 2) {
    await db.insert(triggerTable).values([
      { automationId, type: trigger[0] },
      { automationId, type: trigger[1] },
    ]);
  } else {
    await db.insert(triggerTable).values({
      automationId,
      type: trigger[0],
    });
  }

  return await db.query.automationTable.findFirst({
    where: eq(automationTable.id, automationId),
    with: {
      trigger: true,
    },
  });
};
