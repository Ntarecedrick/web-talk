import React, { ReactNode } from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/app/components/ui/Tooltip"
import { cn } from '@/lib/utils'

export default function ToolTip({trigger, message, contentStyle}:{trigger:ReactNode | string, message:string, contentStyle?:string}) {
  return (
    <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>{trigger}</TooltipTrigger>
      <TooltipContent className={cn(contentStyle, "")}>
        <p>{message}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  
  )
}
