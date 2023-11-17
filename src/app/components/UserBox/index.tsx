import React from 'react'
import UserAvatar from '../userAvatar'

export default function UserBox() {
  return (
    <div className='flex items-center gap-x-5  justify-between border-b border-wt-darkgray-50 px-1 py-3 m-1 hover:bg-wt-darkgray-300 cursor-pointer hover:rounded-md'>
        <UserAvatar url='https://github.com/shadcn.png' className='ml-4'/>
        <div>
            <h2 className='font-bold '>John Doe</h2>
            <p className='text-xs mt-1'>Just a guy passing by</p>
        </div>
        <div className='h-2 w-2 rounded-full bg-wt-green-500'></div>
    </div>
  )
}
