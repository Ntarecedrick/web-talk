import React from 'react'
import Input from '../Input'
import SendButton from './SendButton'

export default function SendMessage() {
  return (
    <div className='fixed bottom-0 flex items-center w-[78%] gap-x-4 pb-3'>
        <Input type='text' className='col-span-6' placeholder='type your message' />
        <SendButton />
    </div>
  )
}
