import { z } from "zod";
import { db } from "@/db";
import { userSpace, User } from "@/db/schema";
import { publicProcedure, router } from "@/server/trpc";
import { eq } from "drizzle-orm";
export const GetUserRouter = router({
  create: publicProcedure
    .input(
      z.object({
        space_id: z.string(),
      })
    )
    .query(async ({ input }) => {
      const result = await db
        .select()
        .from(userSpace)
        .where(eq(userSpace.id, input.space_id)).leftJoin(userSpace.userInSpace, User.id)
        ;
      return result;
    }),
});
