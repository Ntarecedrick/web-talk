import React from "react";
import UserBox from "../UserBox";
import { IconLock } from "@tabler/icons-react";

export default function SideMenu() {
  return (
    <div className="fixed left-0 top-[45px]  z-50 h-screen w-[20%] bg-inherit border-r border-wt-darkgray-50 pt-5 pb-12 px-2 overflow-y-auto ">
      <div>
        <div className="flex justify-center items-center gap-x-3 text-sm">
          <IconLock size={16} />
          <h1>Private Space</h1>
        </div>
        <div>
          {" "}
          {[...new Array(10)].map((_, index) => (
            <UserBox key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
