import React from 'react'
import SendMessage from '../components/SendMessage'
import ReadMessage from '../components/ReadMessage'

export default function page() {
  return (
    <div>
      <ReadMessage />
      <SendMessage />
    </div>
  )
}
