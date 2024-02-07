/* eslint-disable no-unused-vars */
import React from 'react'

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src={"https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg"} alt="user avatar" />
                </div>
            </div>
            <div className='chat-bubble text-white bg-blue-500'>Hi! Jay shree ram bro!</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:40</div>
        </div>
    )
}

export default Message;