import React from 'react'
import SocialMediaIcon from './SocialMediaIcon';
const ShareBox = () => {
  return (
    <div className=' bg-black rounded-lg px-4 py-3 flex'>
          <div className='border-l-2 pl-3 border-[#ffdd95] flex'>
            <div className=' flex flex-col'>
              <p className=' text-[#ffdd95] text-[14px]'>Share Aniwatch</p>
              <p className=' text-[12px]'>to your friends</p>
            </div>
          </div>
          <div className=' flex gap-3 h-[30px] '>
          <div className=' text-[#555555] text-[16px] h-full flex flex-col items-center ml-8'>
              <p>265K</p>
              <p className=' text-[9px] mt-[-6px]'>shares</p>
            </div>
              <SocialMediaIcon/>
          </div>
        </div>
  )
}

export default ShareBox