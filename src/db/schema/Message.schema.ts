import {
    pgTable,
    timestamp,
    uuid,
    boolean,
    date,
    json,
    text,
  } from "drizzle-orm/pg-core";

  import {User} from "./User.schema"
  import {SpaceSchema} from "./Space.schema"


  export var message = pgTable("Message", {
    id:uuid("id").defaultRandom().primaryKey().notNull(),
    message:text("message").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
    MessageFrom:uuid("MessageFrom").notNull().references(()=> User.id ),
    MessageTo:uuid("MessageTo").notNull().references(()=> User.id),
    updateAt:timestamp("updated_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
    space_id: uuid("Space_id").references(()=> SpaceSchema.id)
  })