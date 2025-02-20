import { db } from "@/db/drizzle";
import {
  automationTable,
  dmTable,
  keywordTable,
  listenerTable,
  postTable,
  triggerTable,
} from "@/db/schema";

import { and, asc, eq, ilike, sql } from "drizzle-orm";

interface ChatMessage {
  senderId: string | null;
  receiver: string | null;
  message: string | null;
  automationId: string | null;
}

export const matchKeyword = async (keyword: string) => {
  return await db.query.keywordTable.findFirst({
    where: ilike(keywordTable.word, keyword),
  });
};

export const getKeywordAutomation = async (
  automationId: string,
  dm: boolean
) => {
  return await db.query.automationTable.findFirst({
    where: eq(automationTable.id, automationId),
    with: {
      dms: dm ? true : undefined,
      trigger: {
        where: eq(triggerTable.type, dm ? "DM" : "COMMENT"),
      },
      listener: true,
      user: {
        with: {
          subscription: {
            columns: {
              plan: true,
            },
          },
          integrations: {
            columns: {
              token: true,
            },
          },
        },
      },
    },
  });
};

export const trackResponses = async (
  automationId: string,
  type: "COMMENT" | "DM"
) => {
  if (type === "COMMENT") {
    return await db
      .update(listenerTable)
      .set({ commentCount: sql`${listenerTable.commentCount} + 1` })
      .where(eq(listenerTable.automationId, automationId));
  }

  if (type === "DM") {
    return db
      .update(listenerTable)
      .set({
        dmCount: sql`${listenerTable.dmCount} + 1`,
      })
      .where(eq(listenerTable.automationId, automationId));
  }
};

export const createChatHistory = async (
  automationId: string,
  sender: string,
  receiver: string,
  message: string
) => {
  return await db.insert(dmTable).values({
    automationId,
    senderId: sender,
    receiver,
    message,
  });
};

export const getKeywordPost = async (postId: string, automationId: string) => {
  return await db.query.postTable.findFirst({
    where: and(
      eq(postTable.id, postId),
      eq(postTable.automationId, automationId)
    ),
    columns: {
      automationId: true,
    },
  });
};

export const getChatHistory = async (sender: string, receiver: string) => {
  const messages = await db.query.dmTable.findMany({
    where: and(eq(dmTable.senderId, sender), eq(dmTable.receiver, receiver)),
    orderBy: asc(dmTable.createdAt),
  });

  const history: ChatMessage[] = messages.map((msg) => ({
    senderId: msg.senderId,
    receiver: msg.receiver,
    message: msg.message,
    automationId: msg.automationId,
  }));

  const chatSession: { role: "assistant" | "user"; content: string }[] =
    history.map((chat) => {
      return {
        role: chat.receiver ? "assistant" : "user",
        content: chat.message!,
      };
    });

  return {
    history: chatSession,
    automationId:
      history.length > 0 ? history[history.length - 1].automationId : null,
  };
};
