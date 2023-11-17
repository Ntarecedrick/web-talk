"use client"

import { IconBell } from '@tabler/icons-react'
import React from 'react'
import UserAvatar from '../userAvatar'

export default function  MyspaceNavbar() {
  return (
    <div className='absolute top-0 left-0 w-full p-2 flex items-center justify-between border-b border-wt-darkgray-50 z-50 '>
        <div>
          <h1 className='font-bold text-gray-300'>&ldquo; The Doctor &ldquo; Space</h1>
        </div>
        <div className='flex items-center gap-x-4'>
        <IconBell />
        <UserAvatar className='h-7 w-7' url='https://github.com/shadcn.png' fallback='CN'  />
        </div>
    </div>
  )
}
