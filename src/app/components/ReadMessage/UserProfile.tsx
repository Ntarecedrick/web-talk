"use client";

import { IconArrowBigLeft } from "@tabler/icons-react";
import UserAvatar from "../userAvatar";

export default function UserProfile({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-x-5 mb-4">
      <IconArrowBigLeft
        size={40}
        className="bg-wt-darkgray-50 p-2 rounded-full cursor-pointer hover:bg-wt-darkgray-50/75"
      />
      <div className="flex items-center gap-3 bg-wt-darkgray-50 px-3 py-1 rounded-md cursor-pointer hover:bg-wt-darkgray-50/75">
        <UserAvatar
          className="h-7 w-7"
          url="https://github.com/shadcn.png"
          fallback="CN"
        />
        <p>{name}</p>
      </div>
    </div>
  );
}
