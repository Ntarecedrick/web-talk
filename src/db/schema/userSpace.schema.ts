import {
  pgTable,
  timestamp,
  uuid,
  boolean,
  date,
  json,
  text,
  unique,
} from "drizzle-orm/pg-core";

import { SpaceSchema } from "./Space.schema";
import { User } from "./User.schema";
export const userSpace = pgTable("userSpace", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  spaceID: uuid("space_id")
    .notNull()
    .references(() => SpaceSchema.id),
  userInSpace: uuid("user_id")
    .notNull()
    .references(() => User.id),
});
