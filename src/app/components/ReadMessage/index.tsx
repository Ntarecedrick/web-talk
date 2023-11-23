"use client";

import React, { useEffect, useState } from "react";
import { UserMessage } from "@/app/dummyData";
import moment from "moment";
import { cn } from "@/lib/utils";
import EncryptedMessage from "../EncryptedMessage";
import UserProfile from "./UserProfile";
import useGetLoggedInUser from "@/hooks/useGetLoggedInUser";
import { trpc } from "@/app/_trpc/client";
import {getRelativeTime} from "@/utils/getRelativeTime"

export default function ReadMessage() {
  const [userId, setUser] = useState(1);
  const currentDate = moment("2023/10/23");
  const yesterdayDate = moment().subtract(1, "days");
  const displayText = currentDate.isSame(moment(), "day")
    ? "today"
    : yesterdayDate.isSame(moment(), "day")
    ? "yesterday"
    : currentDate.format("YYYY-MM-DD");

  const { userId: LoggedInUser } = useGetLoggedInUser();
  const { data, isLoading } = trpc.getSingleUserMessages.fetch.useQuery({
    userId: "88994ec1-114c-4a72-aed6-9522f42a1ed1",
  });

  const [messages, setMessage] = useState<any>();
  useEffect(() => {
    if (data) {
      setMessage(data);
    }
  }, [data]);
  
  return (
    <div>
      <UserProfile name="Ntare Cedrick" />
      <div className="overflow-y-auto rounded-md max-h-[600px] border border-wt-darkgray-50 p-3">
        <EncryptedMessage />
        <div className="flex items-center justify-center my-4 ">
          <span className="text-sm px-2 py-1 first-letter:uppercase bg-wt-darkgray-700 rounded-md ">
            {displayText}
          </span>
        </div>
        {messages?.sort((a,b)=>{
            const timestampA = new Date(a.Message.createdAt).getTime();
            const timestampB = new Date(b.Message.createdAt).getTime();
          
            return timestampA - timestampB;
        }).map((user:any) => (
          <div
            className={cn(
              user.Message.MessageTo == LoggedInUser ? "border-red-400" : "border-blue-400",
              "border-l-4 bg-wt-darkgray-50 mt-3 p-2 rounded-sm"
            )}
          >
            <p className="text-xs mr-auto">
              {getRelativeTime(user.Message.createdAt)}
            </p>
            <p>{user.Message.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
