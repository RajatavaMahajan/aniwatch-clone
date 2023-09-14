import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
const SocialMediaIcon = () => {
  return (
    <div className=' flex gap-3 text-white'>
          <div className='rounded-full w-[120px] h-full transition-transform hover:translate-y-[-3px] flex items-center justify-center bg-[#0088cc]'>
              <TelegramIcon fontSize='small' />
          </div>
          <div className='rounded-full w-[50px] h-full transition-transform hover:translate-y-[-3px] flex items-center justify-center bg-[#55acee]'>
              <TwitterIcon fontSize='small' />
          </div>
          <div className='rounded-full w-[50px] h-full transition-transform hover:translate-y-[-3px] flex items-center justify-center bg-[#4267b2]'>
              <FacebookIcon fontSize='small' />
          </div>
          <div className='rounded-full w-[50px] h-full transition-transform hover:translate-y-[-3px] flex items-center justify-center bg-[#ff4500]'>
              <RedditIcon />
          </div>
          <div className='rounded-full w-[50px] h-full transition-transform hover:translate-y-[-3px] flex items-center justify-center bg-[#95d03a]'>
              <ShareIcon fontSize='small' />
          </div>
    </div>
  )
}

export default SocialMediaIcon