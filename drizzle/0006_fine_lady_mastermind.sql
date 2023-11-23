CREATE TABLE IF NOT EXISTS "Space" (
	"id" uuid PRIMARY KEY NOT NULL,
	"Name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "userSpace" (
	"id" uuid PRIMARY KEY NOT NULL,
	"space_id" uuid NOT NULL,
	"owner_id" uuid NOT NULL,
	"user_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "userSpace" ADD CONSTRAINT "userSpace_space_id_Space_id_fk" FOREIGN KEY ("space_id") REFERENCES "Space"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "userSpace" ADD CONSTRAINT "userSpace_owner_id_profiles_id_fk" FOREIGN KEY ("owner_id") REFERENCES "profiles"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "userSpace" ADD CONSTRAINT "userSpace_user_id_profiles_id_fk" FOREIGN KEY ("user_id") REFERENCES "profiles"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
