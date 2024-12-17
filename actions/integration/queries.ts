"use server";

import { eq } from "drizzle-orm";

import { db } from "@/db/drizzle";
import { integrationTable } from "@/db/schema";

export const updateIntegration = async (
  id: string,
  token: string,
  expire: Date
) => {
  return await db
    .update(integrationTable)
    .set({ token, expiresAt: expire })
    .where(eq(integrationTable.id, id))
    .returning();
};
