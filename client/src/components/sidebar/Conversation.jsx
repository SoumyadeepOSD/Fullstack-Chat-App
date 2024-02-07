/* eslint-disable no-unused-vars */
import React from 'react'

const Conversation = () => {
  return (
    <div>
        <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img src="https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg" alt="user avatar" />
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold'>John Doe</p>
                    <span className='text-xl'>🎃</span>
                </div>
            </div>
        </div>

        <div className='divider my-0 py-0 h-1'/>
    </div>
  )
}

export default Conversation;