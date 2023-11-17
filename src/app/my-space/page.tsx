import React from 'react'
import SendMessage from '../components/SendMessage'
import EncryptedMessage from '../components/EncryptedMessage'

export default function page() {
  return (
    <div>
      <EncryptedMessage />
      <SendMessage />
    </div>
  )
}
