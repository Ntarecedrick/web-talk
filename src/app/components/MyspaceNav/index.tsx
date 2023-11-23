"use client";

import { IconBell, IconPlus } from "@tabler/icons-react";
import React, { useState } from "react";
import UserAvatar from "../userAvatar";
import Button from "../Button";
import Input from "../Input";
import useGetLoggedInUser from "@/hooks/useGetLoggedInUser";
import { trpc } from "@/app/_trpc/client";
import AddUser from "../AddUser";

export default function MyspaceNavbar() {
  const [isNotification, setIsNotification] = useState(false);
  const {userId}= useGetLoggedInUser()
  console.log(userId)
  const {data, isLoading}= trpc.getSpace.fetch.useQuery({
    Owner_id:userId
  })
  console.log(data)
  return (
    <div className="absolute top-0 left-0 w-full p-2 flex items-center justify-between border-b border-wt-darkgray-50 z-50 ">
      <div className="flex items-center gap-x-2">
       <AddUser user_id={userId} />
        <h1 className="font-bold text-gray-300">
          &ldquo; {data?.[0].name} &ldquo; Space
        </h1>
      </div>
      <div>
        <Input
          placeholder="Search user in your space"
          className="w-[300px] placeholder:text-sm  py-1"
          type="text"
        />
      </div>
      <div className="flex items-center gap-x-4">
        <div className="relative hover:bg-wt-darkgray-50 p-2 rounded-md cursor-pointer">
          <IconBell className="" size={16} />
          <div className="h-1.5 w-1.5 bg-red-500 rounded-full absolute top-[2px] right-[2px]"></div>
        </div>
        <UserAvatar
          className="h-7 w-7"
          url="https://github.com/shadcn.png"
          fallback="CN"
        />
      </div>
    </div>
  );
}
