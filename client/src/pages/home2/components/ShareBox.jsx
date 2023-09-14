import React from 'react'
import SocialMediaIcon from '../../home/components/SocialMediaIcon';
import { shareIcon } from '../assets';
const ShareBox = () => {
  return (
    <div className=' bg-transparent rounded-lg px-4 py-3 flex items-center'>
          <div className=' pl-3 flex items-center'>
            <img src={shareIcon} className=' rounded-full w-[60px] h-[60px]' alt="" />
            <div className=' flex flex-col items-center justify-between ml-5'>
              <p className=' text-[#ffdd95] text-[14px]'>Share Aniwatch</p>
              <p className=' text-[12px] text-white'>to your friends</p>
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