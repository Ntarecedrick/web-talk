import { publicProcedure, router } from "./trpc";
import { SendMessageRouter, getSingleUserMessagesRouter } from "./router/Message";
import {CreateSpaceRouter, AddUserRouter, GetSpaceRouter} from "./router/space"

export const appRouter = router({
    getSingleUserMessages: getSingleUserMessagesRouter,
  SendMessage: SendMessageRouter,
  createSpace: CreateSpaceRouter,
  addUser:AddUserRouter,
  getSpace:GetSpaceRouter,
});

export type AppRouter = typeof appRouter;
