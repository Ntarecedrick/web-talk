ALTER TABLE "Message" DROP CONSTRAINT "Message_id_Profiles_id_fk";
--> statement-breakpoint
ALTER TABLE "Message" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "Message" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "Message" ADD COLUMN "MessageFrom" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "Message" ADD COLUMN "MessageTo" uuid NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Message" ADD CONSTRAINT "Message_MessageFrom_Profiles_id_fk" FOREIGN KEY ("MessageFrom") REFERENCES "Profiles"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Message" ADD CONSTRAINT "Message_MessageTo_Profiles_id_fk" FOREIGN KEY ("MessageTo") REFERENCES "Profiles"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
