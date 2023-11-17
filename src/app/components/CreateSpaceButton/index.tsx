"use client"

import React from 'react'
import {IconPlus} from "@tabler/icons-react"

export default function index() {
  return (
    <button className='bg-wt-darkgray-700 flex px-3 py-1.5 rounded-md gap-2 m-2 text-gray-200  '>
        <IconPlus />
        <p className='text-sm'>Create your Talk space</p>
    </button>
  )
}
