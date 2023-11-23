import { z } from "zod";
import { db } from "@/db";
import { message } from "@/db/schema";
import { publicProcedure, router } from "@/server/trpc";

export const SendMessageRouter = router({
  create: publicProcedure
    .input(
      z.object({
        message: z.string(),
        messageFrom: z.string(),
        messageTo: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const result = await db
        .insert(message)
        .values({
          message: input.message,
          MessageFrom: input.messageFrom,
          MessageTo: input.messageTo,
        })
        .returning();
      return result;
    }),
});
