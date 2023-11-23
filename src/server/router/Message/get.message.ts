import { z } from "zod";
import { db } from "@/db";
import { message, User } from "@/db/schema";
import { publicProcedure, router } from "@/server/trpc";
import { eq } from "drizzle-orm";
export const getSingleUserMessagesRouter = router({
  fetch: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .query(async ({ input }) => {
      const result = await db
        .selectDistinct()
        .from(message)
        .innerJoin(User, eq(message.MessageFrom, User.id))
        .where(eq(message.MessageTo, input.userId));
      return result;
    }),
});
