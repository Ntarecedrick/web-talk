import { z } from "zod";
import { db } from "@/db";
import {  userSpace } from "@/db/schema";
import { publicProcedure, router } from "@/server/trpc";
export const AddUserRouter = router({
  create: publicProcedure
    .input(
      z.object({
        addedUser:z.string(),
        space_id:z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const result = await db.insert(userSpace).values({
       spaceID:input.space_id,
       userInSpace:input.addedUser
      }).returning()
      return result;
    }),
});
