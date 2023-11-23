import { z } from "zod";
import { db } from "@/db";
import {  SpaceSchema } from "@/db/schema";
import { publicProcedure, router } from "@/server/trpc";
export const CreateSpaceRouter = router({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const result = await db.insert(SpaceSchema).values({
        name:input.name
      }).returning()
      return result;
    }),
});
