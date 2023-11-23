import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  label: string;
  Icon?: ReactNode;
  spinnerStyles?: string;
  buttonStyles: string;
  isLoading?: boolean;
  type?:"button" | "submit" | "reset" | undefined
};

export default function Button({
  label,
  buttonStyles,
  Icon,
  spinnerStyles,
  isLoading,
  type
}: Props) {
  return (
    <>
      {isLoading ? (
        <div className={spinnerStyles}>is Loading</div>
      ) : (
        <button className={cn("", buttonStyles)} type={type} >
          {Icon && Icon}
          <span>{label}</span>
        </button>
      )}
    </>
  );
}
