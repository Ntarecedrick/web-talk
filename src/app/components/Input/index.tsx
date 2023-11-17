import { cn } from "@/lib/utils";
import React from "react";

export default function Input({
  type,
  className,
  placeholder,
  onChange,
  autoFocus,
}: {
  type: string;
  className: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  autoFocus?: boolean;
}) {
  return (
    <input
      type={type}
      className={cn(
        "bg-wt-darkgray-300 rounded-md w-full py-2 px-4 first-letter:uppercase focus:outline-none border border-wt-darkgray-50 placeholder:first-letter:uppercase  placeholder:text-gray-400 text-gray-300",
        className
      )}
      onChange={onChange}
      placeholder={placeholder}
      autoFocus={autoFocus}
      autoCapitalize=""
    />
  );
}
