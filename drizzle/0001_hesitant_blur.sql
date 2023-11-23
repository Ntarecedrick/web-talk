CREATE TABLE IF NOT EXISTS "Profiles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"updated_at" timestamp with time zone,
	"username" text,
	"full_name" text,
	"avatar_url" text,
	"email" text
);
