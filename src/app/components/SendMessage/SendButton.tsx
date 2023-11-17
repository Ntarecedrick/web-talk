import { IconSend } from "@tabler/icons-react";
import React from "react";
import ToolTip from "../ToolTip";

export default function SendButton() {
  return (
    <ToolTip
      trigger={
        <button
          className="bg-wt-green-500 hover:bg-wt-green-500/90 text-gray-200 rounded-md h-auto p-2 col-span-1"
          type="submit"
        >
          <IconSend />
        </button>
      }
      message="send Message"
      contentStyle="bg-wt-300"
    />
  );
}
