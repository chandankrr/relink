import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  unique,
  uniqueIndex,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const subscriptionPlanType = pgEnum("subscription_plan_type", [
  "PRO",
  "FREE",
]);

export const integrationType = pgEnum("integration_type", ["INSTAGRAM"]);

export const mediaType = pgEnum("media_type", [
  "IMAGE",
  "VIDEO",
  "CAROUSEL_ALBUM",
]);

export const listenerType = pgEnum("listener_type", ["SMARTAI", "MESSAGE"]);

// User Table
export const userTable = pgTable(
  "user",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    clerkId: text("clerk_id").unique().notNull(),
    email: text("email").unique().notNull(),
    firstname: varchar("firstname", { length: 255 }),
    lastname: varchar("lastname", { length: 255 }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [uniqueIndex("clerk_id_idx").on(table.clerkId)]
);

// Subscription Table
export const subscriptionTable = pgTable("subscription", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => userTable.id, {
    onDelete: "cascade",
  }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  plan: subscriptionPlanType("plan").default("FREE").notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  customerId: text("customer_id").unique(),
});

// Integration Table
export const integrationTable = pgTable("integrations", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: integrationType("name").default("INSTAGRAM").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  userId: uuid("user_id").references(() => userTable.id, {
    onDelete: "cascade",
  }),
  token: text("token").unique().notNull(),
  expiresAt: timestamp("expires_at"),
  instagramId: text("instagram_id").unique(),
});

// Automation Table
export const automationTable = pgTable("automation", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull().default("Untitled"),
  description: text("description").notNull().default("This is description..."),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  active: boolean("active").default(false).notNull(),
  userId: uuid("user_id").references(() => userTable.id, {
    onDelete: "cascade",
  }),
});

// DMs Table
export const dmTable = pgTable("dms", {
  id: uuid("id").primaryKey().defaultRandom(),
  automationId: uuid("automation_id").references(() => automationTable.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  senderId: text("sender_id"),
  receiver: text("receiver"),
  message: text("message"),
});

// Post Table
export const postTable = pgTable("post", {
  id: uuid("id").primaryKey().defaultRandom(),
  postId: text("post_id").notNull(),
  caption: text("caption"),
  media: text("media").notNull(),
  mediaType: mediaType("media_type").default("IMAGE").notNull(),
  automationId: uuid("automation_id").references(() => automationTable.id, {
    onDelete: "cascade",
  }),
});

// Listener Table
export const listenerTable = pgTable("listener", {
  id: uuid("id").primaryKey().defaultRandom(),
  automationId: uuid("automation_id").references(() => automationTable.id, {
    onDelete: "cascade",
  }),
  listener: listenerType("listener").default("MESSAGE").notNull(),
  prompt: text("prompt").notNull(),
  commentReply: text("comment_reply"),
  dmCount: integer("dm_count").default(0).notNull(),
  commentCount: integer("comment_count").default(0).notNull(),
});

// Trigger Table
export const triggerTable = pgTable("trigger", {
  id: uuid("id").primaryKey().defaultRandom(),
  type: text("type").notNull(),
  automationId: uuid("automation_id").references(() => automationTable.id, {
    onDelete: "cascade",
  }),
});

// Keyword Table
export const keywordTable = pgTable(
  "keyword",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    word: text("word").notNull(),
    automationId: uuid("automation_id").references(() => automationTable.id, {
      onDelete: "cascade",
    }),
  },
  (table) => [
    {
      uniqueWordPerAutomation: unique().on(table.automationId, table.word),
    },
  ]
);

// Relations
export const userRelations = relations(userTable, ({ one, many }) => ({
  subscription: one(subscriptionTable, {
    fields: [userTable.id],
    references: [subscriptionTable.userId],
  }),
  integrations: many(integrationTable),
  automations: many(automationTable),
}));

export const subscriptionRelations = relations(
  subscriptionTable,
  ({ one }) => ({
    user: one(userTable, {
      fields: [subscriptionTable.userId],
      references: [userTable.id],
    }),
  })
);

export const integrationRelations = relations(integrationTable, ({ one }) => ({
  user: one(userTable, {
    fields: [integrationTable.userId],
    references: [userTable.id],
  }),
}));

export const automationRelations = relations(
  automationTable,
  ({ one, many }) => ({
    user: one(userTable, {
      fields: [automationTable.userId],
      references: [userTable.id],
    }),
    trigger: many(triggerTable),
    listener: one(listenerTable),
    posts: many(postTable),
    dms: many(dmTable),
    keywords: many(keywordTable),
  })
);

export const dmRelations = relations(dmTable, ({ one }) => ({
  automation: one(automationTable, {
    fields: [dmTable.automationId],
    references: [automationTable.id],
  }),
}));

export const postRelations = relations(postTable, ({ one }) => ({
  automation: one(automationTable, {
    fields: [postTable.automationId],
    references: [automationTable.id],
  }),
}));

export const listenerRelations = relations(listenerTable, ({ one }) => ({
  automation: one(automationTable, {
    fields: [listenerTable.automationId],
    references: [automationTable.id],
  }),
}));

export const triggerRelations = relations(triggerTable, ({ one }) => ({
  automation: one(automationTable, {
    fields: [triggerTable.automationId],
    references: [automationTable.id],
  }),
}));

export const keywordRelations = relations(keywordTable, ({ one }) => ({
  automation: one(automationTable, {
    fields: [keywordTable.automationId],
    references: [automationTable.id],
  }),
}));
