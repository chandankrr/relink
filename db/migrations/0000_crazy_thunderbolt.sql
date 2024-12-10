CREATE TYPE "public"."integrations" AS ENUM('INSTAGRAM');--> statement-breakpoint
CREATE TYPE "public"."listeners" AS ENUM('SMARTAI', 'MESSAGE');--> statement-breakpoint
CREATE TYPE "public"."mediatype" AS ENUM('IMAGE', 'VIDEO', 'CAROSEL_ALBUM');--> statement-breakpoint
CREATE TYPE "public"."subscription_plan" AS ENUM('PRO', 'FREE');--> statement-breakpoint
CREATE TABLE "Automation" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"active" boolean DEFAULT false NOT NULL,
	"userId" uuid
);
--> statement-breakpoint
CREATE TABLE "Dms" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"automationId" uuid,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"senderId" text,
	"receiver" text,
	"message" text
);
--> statement-breakpoint
CREATE TABLE "Integration" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" "integrations" DEFAULT 'INSTAGRAM' NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"userId" uuid,
	"token" text NOT NULL,
	"expiresAt" timestamp,
	"instagramId" text,
	CONSTRAINT "Integration_token_unique" UNIQUE("token"),
	CONSTRAINT "Integration_instagramId_unique" UNIQUE("instagramId")
);
--> statement-breakpoint
CREATE TABLE "Keyword" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"word" text NOT NULL,
	"automationId" uuid
);
--> statement-breakpoint
CREATE TABLE "Listener" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"automationId" uuid,
	"listener" "listeners" DEFAULT 'MESSAGE' NOT NULL,
	"prompt" text NOT NULL,
	"commentReply" text,
	"dmCount" integer DEFAULT 0 NOT NULL,
	"commentCount" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Post" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"postId" text NOT NULL,
	"caption" text,
	"media" text NOT NULL,
	"mediaType" "mediatype" DEFAULT 'IMAGE' NOT NULL,
	"automationId" uuid
);
--> statement-breakpoint
CREATE TABLE "Subscription" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userId" uuid,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"plan" "subscription_plan" DEFAULT 'FREE' NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	"customerId" text,
	CONSTRAINT "Subscription_customerId_unique" UNIQUE("customerId")
);
--> statement-breakpoint
CREATE TABLE "Trigger" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"type" text NOT NULL,
	"automationId" uuid
);
--> statement-breakpoint
CREATE TABLE "User" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"clerkId" text NOT NULL,
	"email" text NOT NULL,
	"firstname" varchar(255),
	"lastname" varchar(255),
	"createdAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "User_clerkId_unique" UNIQUE("clerkId"),
	CONSTRAINT "User_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "Automation" ADD CONSTRAINT "Automation_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Dms" ADD CONSTRAINT "Dms_automationId_Automation_id_fk" FOREIGN KEY ("automationId") REFERENCES "public"."Automation"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Integration" ADD CONSTRAINT "Integration_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Keyword" ADD CONSTRAINT "Keyword_automationId_Automation_id_fk" FOREIGN KEY ("automationId") REFERENCES "public"."Automation"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Listener" ADD CONSTRAINT "Listener_automationId_Automation_id_fk" FOREIGN KEY ("automationId") REFERENCES "public"."Automation"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Post" ADD CONSTRAINT "Post_automationId_Automation_id_fk" FOREIGN KEY ("automationId") REFERENCES "public"."Automation"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_automationId_Automation_id_fk" FOREIGN KEY ("automationId") REFERENCES "public"."Automation"("id") ON DELETE cascade ON UPDATE no action;