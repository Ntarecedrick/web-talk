
import {
    pgTable,
    timestamp,
    uuid,
    boolean,
    date,
    json,
    text,
    unique
  } from "drizzle-orm/pg-core";
import {User} from "./User.schema"

  export const SpaceSchema = pgTable("Space", {
    id:uuid("id").notNull().primaryKey().defaultRandom(),
    name: text("Name").notNull(),
    created_by: uuid("owner_id").references(()=> User.id ),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  })