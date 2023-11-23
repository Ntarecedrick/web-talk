ALTER TABLE "userSpace" DROP CONSTRAINT "userSpace_owner_id_profiles_id_fk";
--> statement-breakpoint
ALTER TABLE "Message" ADD COLUMN "Space_id" uuid;--> statement-breakpoint
ALTER TABLE "Space" ADD COLUMN "owner_id" uuid;--> statement-breakpoint
ALTER TABLE "Space" ADD COLUMN "created_at" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "Space" ADD COLUMN "updated_at" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Message" ADD CONSTRAINT "Message_Space_id_Space_id_fk" FOREIGN KEY ("Space_id") REFERENCES "Space"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Space" ADD CONSTRAINT "Space_owner_id_profiles_id_fk" FOREIGN KEY ("owner_id") REFERENCES "profiles"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "userSpace" DROP COLUMN IF EXISTS "owner_id";