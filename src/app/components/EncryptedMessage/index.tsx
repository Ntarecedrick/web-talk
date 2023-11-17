import { IconLock } from '@tabler/icons-react'
import React from 'react'

export default function EncryptedMessage() {
  return (
    <div className='text-sm flex items-center gap-x-3 justify-center '>
        <IconLock size={14} />
        <p>Messages are end-to-end Encrypted. no one from outside of this chat, not even Web Talk, can read them</p>
    </div>
  )
}
