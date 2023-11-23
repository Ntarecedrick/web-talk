import { z } from "zod";
import { db } from "@/db";
import { userSpace, SpaceSchema } from "@/db/schema";
import { publicProcedure, router } from "@/server/trpc";
import { eq } from "drizzle-orm";
export const GetSpaceRouter = router({
  fetch: publicProcedure
    .input(
      z.object({
        Owner_id: z.string(),
      })
    )
    .query(async ({ input }) => {
      const result = await db
        .select()
        .from(SpaceSchema)
        .where(eq(SpaceSchema.created_by, input.Owner_id));
      return result;
    }),
});
