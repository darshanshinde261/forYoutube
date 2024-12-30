import React from 'react'
import { FaUserCircle } from "react-icons/fa"

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2 '>
        <FaUserCircle className='h-8 w-8' />
        <span className='font-bold px-1'>{name}</span>
        <span className='px-2'>{message}</span>
    </div>
  )
}

export default ChatMessage