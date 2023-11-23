"use client";

import React, { useState } from "react";
import UserAvatar from "../userAvatar";
import { cn } from "@/lib/utils";
import { IconMessage, IconSquare } from "@tabler/icons-react";

export default function UserBox({
  name,
  isRead,
  url,
  isSentByUser,
}: {
  name: string;
  url: string;
  isRead: boolean;
  isSentByUser?: boolean;
}) {
  const [isOpen, setIsOpen] = useState("");
  return (
    <div
      className={cn(
        isRead ? "" : "",
        "flex items-center justify-between gap-x-5 border-b border-wt-darkgray-50 px-1 py-2 m-1 hover:bg-wt-darkgray-300 cursor-pointer hover:rounded-md"
      )}
    >
      <div className="flex items-center gap-x-4">
        {" "}
        <UserAvatar url={url} className="ml-4" />
        <div>
          <h2 className="font-bold ">{name}</h2>
          {isRead ? (
            <div className="text-xs mt-1 text-wt-darkgray-700 flex items-center gap-x-2">
              {" "}
              <span>New Chat </span>{" "}
              <div className="w-1 h-1 rounded-full bg-gray-400"></div>{" "}
              <IconMessage size={13} />
            </div>
          ) : isSentByUser ? (
            <p className="text-xs mt-1">Delivered</p>
          ) : (
            <div className="text-xs mt-1 flex items-center gap-x-2">
            <span>Received</span>
            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
          <IconSquare size={13} className="text-red-500" />
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
