CREATE TYPE "public"."integration_type" AS ENUM('INSTAGRAM');--> statement-breakpoint
CREATE TYPE "public"."listener_type" AS ENUM('SMARTAI', 'MESSAGE');--> statement-breakpoint
CREATE TYPE "public"."media_type" AS ENUM('IMAGE', 'VIDEO', 'CAROUSEL_ALBUM');--> statement-breakpoint
CREATE TYPE "public"."subscription_plan_type" AS ENUM('PRO', 'FREE');--> statement-breakpoint
CREATE TABLE "automation" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) DEFAULT 'Untitled' NOT NULL,
	"description" text DEFAULT 'This is description...' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"active" boolean DEFAULT false NOT NULL,
	"user_id" uuid
);
--> statement-breakpoint
CREATE TABLE "dms" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"automation_id" uuid,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"sender_id" text,
	"receiver" text,
	"message" text
);
--> statement-breakpoint
CREATE TABLE "integrations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" "integration_type" DEFAULT 'INSTAGRAM' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"user_id" uuid,
	"token" text NOT NULL,
	"expires_at" timestamp,
	"instagram_id" text,
	CONSTRAINT "integrations_token_unique" UNIQUE("token"),
	CONSTRAINT "integrations_instagram_id_unique" UNIQUE("instagram_id")
);
--> statement-breakpoint
CREATE TABLE "keyword" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"word" text NOT NULL,
	"automation_id" uuid
);
--> statement-breakpoint
CREATE TABLE "listener" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"automation_id" uuid,
	"listener" "listener_type" DEFAULT 'MESSAGE' NOT NULL,
	"prompt" text NOT NULL,
	"comment_reply" text,
	"dm_count" integer DEFAULT 0 NOT NULL,
	"comment_count" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "post" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"post_id" text NOT NULL,
	"caption" text,
	"media" text NOT NULL,
	"media_type" "media_type" DEFAULT 'IMAGE' NOT NULL,
	"automation_id" uuid
);
--> statement-breakpoint
CREATE TABLE "subscription" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"plan" "subscription_plan_type" DEFAULT 'FREE' NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"customer_id" text,
	CONSTRAINT "subscription_customer_id_unique" UNIQUE("customer_id")
);
--> statement-breakpoint
CREATE TABLE "trigger" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"type" text NOT NULL,
	"automation_id" uuid
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"clerk_id" text NOT NULL,
	"email" text NOT NULL,
	"firstname" varchar(255),
	"lastname" varchar(255),
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "user_clerk_id_unique" UNIQUE("clerk_id"),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "automation" ADD CONSTRAINT "automation_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "dms" ADD CONSTRAINT "dms_automation_id_automation_id_fk" FOREIGN KEY ("automation_id") REFERENCES "public"."automation"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations" ADD CONSTRAINT "integrations_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "keyword" ADD CONSTRAINT "keyword_automation_id_automation_id_fk" FOREIGN KEY ("automation_id") REFERENCES "public"."automation"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "listener" ADD CONSTRAINT "listener_automation_id_automation_id_fk" FOREIGN KEY ("automation_id") REFERENCES "public"."automation"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "post" ADD CONSTRAINT "post_automation_id_automation_id_fk" FOREIGN KEY ("automation_id") REFERENCES "public"."automation"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subscription" ADD CONSTRAINT "subscription_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trigger" ADD CONSTRAINT "trigger_automation_id_automation_id_fk" FOREIGN KEY ("automation_id") REFERENCES "public"."automation"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "clerk_id_idx" ON "user" USING btree ("clerk_id");