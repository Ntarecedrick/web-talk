
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

export const User = pgTable(
  "profiles",
  {
    id: uuid("id").primaryKey().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }),
    username: text("username"),
    fullName: text("full_name"),
    avatarUrl: text("avatar_url"),
    email: text("email"),
  },
  (table) => {
    return {
      profilesUsernameKey: unique("profiles_username_key").on(table.email),
    };
  }
);
