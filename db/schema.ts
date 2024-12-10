import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const subscriptionPlanEnum = pgEnum("subscription_plan", [
  "PRO",
  "FREE",
]);
export const integrationsEnum = pgEnum("integrations", ["INSTAGRAM"]);
export const mediaTypeEnum = pgEnum("mediatype", [
  "IMAGE",
  "VIDEO",
  "CAROSEL_ALBUM",
]);
export const listenersEnum = pgEnum("listeners", ["SMARTAI", "MESSAGE"]);

// User Table
export const users = pgTable("User", {
  id: uuid("id").primaryKey().defaultRandom(),
  clerkId: text("clerkId").unique().notNull(),
  email: text("email").unique().notNull(),
  firstname: varchar("firstname", { length: 255 }),
  lastname: varchar("lastname", { length: 255 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

// Subscription Table
export const subscriptions = pgTable("Subscription", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("userId").references(() => users.id, { onDelete: "cascade" }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  plan: subscriptionPlanEnum("plan").default("FREE").notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  customerId: text("customerId").unique(),
});

// Integration Table
export const integrations = pgTable("Integration", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: integrationsEnum("name").default("INSTAGRAM").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  userId: uuid("userId").references(() => users.id, { onDelete: "cascade" }),
  token: text("token").unique().notNull(),
  expiresAt: timestamp("expiresAt"),
  instagramId: text("instagramId").unique(),
});

// Automation Table
export const automations = pgTable("Automation", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  active: boolean("active").default(false).notNull(),
  userId: uuid("userId").references(() => users.id, { onDelete: "cascade" }),
});

// DMs Table
export const dms = pgTable("Dms", {
  id: uuid("id").primaryKey().defaultRandom(),
  automationId: uuid("automationId").references(() => automations.id),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  senderId: text("senderId"),
  receiver: text("receiver"),
  message: text("message"),
});

// Post Table
export const posts = pgTable("Post", {
  id: uuid("id").primaryKey().defaultRandom(),
  postId: text("postId").notNull(),
  caption: text("caption"),
  media: text("media").notNull(),
  mediaType: mediaTypeEnum("mediaType").default("IMAGE").notNull(),
  automationId: uuid("automationId").references(() => automations.id, {
    onDelete: "cascade",
  }),
});

// Listener Table
export const listeners = pgTable("Listener", {
  id: uuid("id").primaryKey().defaultRandom(),
  automationId: uuid("automationId").references(() => automations.id, {
    onDelete: "cascade",
  }),
  listener: listenersEnum("listener").default("MESSAGE").notNull(),
  prompt: text("prompt").notNull(),
  commentReply: text("commentReply"),
  dmCount: integer("dmCount").default(0).notNull(),
  commentCount: integer("commentCount").default(0).notNull(),
});

// Trigger Table
export const triggers = pgTable("Trigger", {
  id: uuid("id").primaryKey().defaultRandom(),
  type: text("type").notNull(),
  automationId: uuid("automationId").references(() => automations.id, {
    onDelete: "cascade",
  }),
});

// Keyword Table
export const keywords = pgTable("Keyword", {
  id: uuid("id").primaryKey().defaultRandom(),
  word: text("word").notNull(),
  automationId: uuid("automationId").references(() => automations.id, {
    onDelete: "cascade",
  }),
});

// Relations
export const userRelations = relations(users, ({ one, many }) => ({
  subscription: one(subscriptions, {
    fields: [users.id],
    references: [subscriptions.userId],
  }),
  integrations: many(integrations),
  automations: many(automations),
}));

export const subscriptionRelations = relations(subscriptions, ({ one }) => ({
  user: one(users, {
    fields: [subscriptions.userId],
    references: [users.id],
  }),
}));

export const integrationRelations = relations(integrations, ({ one }) => ({
  user: one(users, {
    fields: [integrations.userId],
    references: [users.id],
  }),
}));

export const automationRelations = relations(automations, ({ one, many }) => ({
  user: one(users, {
    fields: [automations.userId],
    references: [users.id],
  }),
  triggers: many(triggers),
  listener: one(listeners),
  posts: many(posts),
  dms: many(dms),
  keywords: many(keywords),
}));

export const dmsRelations = relations(dms, ({ one }) => ({
  automation: one(automations, {
    fields: [dms.automationId],
    references: [automations.id],
  }),
}));

export const postRelations = relations(posts, ({ one }) => ({
  automation: one(automations, {
    fields: [posts.automationId],
    references: [automations.id],
  }),
}));

export const listenerRelations = relations(listeners, ({ one }) => ({
  automation: one(automations, {
    fields: [listeners.automationId],
    references: [automations.id],
  }),
}));

export const triggerRelations = relations(triggers, ({ one }) => ({
  automation: one(automations, {
    fields: [triggers.automationId],
    references: [automations.id],
  }),
}));

export const keywordRelations = relations(keywords, ({ one }) => ({
  automation: one(automations, {
    fields: [keywords.automationId],
    references: [automations.id],
  }),
}));
