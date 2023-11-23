import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

import * as schema from "./schema/index";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

const migrationClient = postgres(DATABASE_URL, {
  max: 1,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const drizzleMigrate = async () => {
  await migrate(drizzle(migrationClient), {
    migrationsFolder: "drizzle",
  });
};

const queryClient = postgres(DATABASE_URL, {
  ssl: {
    rejectUnauthorized: false,
  },
});
export const db = drizzle(queryClient, {
  schema,
});
