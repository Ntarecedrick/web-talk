ALTER TABLE "Profiles" RENAME TO "profiles";--> statement-breakpoint
ALTER TABLE "Message" DROP CONSTRAINT "Message_MessageFrom_Profiles_id_fk";
--> statement-breakpoint
ALTER TABLE "Message" DROP CONSTRAINT "Message_MessageTo_Profiles_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Message" ADD CONSTRAINT "Message_MessageFrom_profiles_id_fk" FOREIGN KEY ("MessageFrom") REFERENCES "profiles"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Message" ADD CONSTRAINT "Message_MessageTo_profiles_id_fk" FOREIGN KEY ("MessageTo") REFERENCES "profiles"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
