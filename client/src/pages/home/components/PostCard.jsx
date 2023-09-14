import React from 'react'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
const PostCard = () => {
  return (
    <div className=' w-full bg-[#2f2f33] p-[20px] flex flex-col gap-3 rounded-[1rem]'>
       <div className=' flex justify-between text-[11px] text-[#AAAAAA]'>
               <div className=' flex'>
               <p className=' mr-[8px]'>#Discussion</p>
               <p>10 hours ago</p>
               </div>
               <div className=' flex items-center gap-1'>
                <ChatBubbleIcon fontSize='small'/>
               <p className=' float-right'>258</p>
               </div>
       </div>
       <div className=' flex flex-col gap-2 '>
         <p className=' text-[15.6px]'>WOMEN ☕ ( just life experience.. nothing against the girls)</p>
         <p className=' text-[12px] text-[#aaaaaa]'>So today.. i was in the metro on my way to school... Then i saw a girl whose mobile was in her back. Pocket.. and the torch was on... So i as a responsible citizen.. i told her that</p>
       </div>
       <div className=' flex gap-3 items-center'>
        <img src="https://avatarfiles.alphacoders.com/207/207935.jpg" className=' w-[25px] h-[25px] rounded-full' alt="" />
        <p className='text-[12px] text-[#aaaaaa]'>Twisted Cult Dolphin</p>
       </div>
    </div>
  )
}

export default PostCard