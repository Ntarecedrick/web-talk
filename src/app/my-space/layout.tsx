import React, { Children, ReactNode } from "react";
import MyspaceNavbar from "../components/MyspaceNav";
import SideMenu from "../components/Sidemenu";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <MyspaceNavbar />
      <div className="pt-10 flex z-40">
        <div className="w-[20%]"><SideMenu /></div>
        <div className="flex-grow p-5">{children}</div>
      </div>
    </div>
  );
}
