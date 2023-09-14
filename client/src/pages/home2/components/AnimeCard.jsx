import React from 'react'
import ClosedCaptionIcon from '@mui/icons-material/ClosedCaption';
import MicIcon from '@mui/icons-material/Mic';
const AnimeCard = ({animeDetails}) => {
    console.log(animeDetails);
  return (
    <div className=' w-full py-4 grid grid-cols-[20%,80%] gap-0 border-b border-white border-opacity-10'>
        <div className='bg-sky-200 w-full rounded-md overflow-hidden'>
            <img src={animeDetails.animeImg} className=' w-full h-full bg-contain' alt="" />
        </div>
        <div className=' w-full flex flex-col gap-3 items-start justify-center text-white pl-5'>
            <p className=' text-[14.4px]'>{animeDetails.animeTitle}</p>
            <div className=' rounded-md overflow-hidden flex gap-1 text-black'>
                <div className=' flex items-center justify-center w-1/2 bg-[#b0e3af] px-1 py-1'>
                    <ClosedCaptionIcon sx={{width:'18px',height:'18px'}}/>
                    <p className=' text-[12px]'>120</p>
                </div>
                <div className=' flex items-center justify-center w-1/2 bg-[#e3b5cd] px-1 py-1'>
                    <MicIcon sx={{width:'18px',height:'18px'}}/>
                    <p className='text-[12px]'>120</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AnimeCard