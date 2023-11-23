import { cn } from "@/lib/utils";
import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export default function Input({
  type,
  className,
  placeholder,
  onChange,
  autoFocus,
  name,
  register
}: {
  type: string;
  className: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  autoFocus?: boolean;
  name?:string;
  register?: UseFormRegister<FieldValues>
}) {
  return (
    <>
    {register && name ? (<input
      type={type}
      className={cn(
        "bg-wt-darkgray-300 rounded-md w-full py-2 px-4 first-letter:uppercase focus:outline-none border border-wt-darkgray-50 placeholder:first-letter:uppercase  placeholder:text-gray-400 text-gray-300",
        className
      )}
      // onChange={onChange}
      placeholder={placeholder}
      autoFocus={autoFocus}
      autoCapitalize=""
      {...register(name)}
    />) :(<input
      type={type}
      name={name}
      className={cn(
        "bg-wt-darkgray-300 rounded-md w-full py-2 px-4 first-letter:uppercase focus:outline-none border border-wt-darkgray-50 placeholder:first-letter:uppercase  placeholder:text-gray-400 text-gray-300",
        className
      )}
      onChange={onChange}
      placeholder={placeholder}
      autoFocus={autoFocus}
      autoCapitalize=""
    />)}
    </>
  );
}
