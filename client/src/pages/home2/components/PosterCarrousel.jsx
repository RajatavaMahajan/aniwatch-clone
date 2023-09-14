import React from 'react'
import { poster1, poster2, poster3 } from '../assets'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const PosterCarrousel = () => {
    return (
        <div className="relative font-popins">
            <img src={poster3} alt="Movie Poster" className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2424284b] to-[#242428] opacity-100"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#24242897] to-[#242428] opacity-100"></div>
            <div className="absolute inset-0 flex items-end text-white">
                <div className="p-10 w-[760px]">
                    <p className=' text-[#ffdd95] text-[18px] mb-5'>#1 Spotlight</p>
                    <p className=' text-5xl mb-6 font-bold font-popins'>Rurouni Kenshin: Meiji Kenkaku Romantan (2023)</p>
                    <div className=' flex gap-4 mb-4'>
                        <div className=' text-[19px] flex gap-1 items-center justify-center'>
                            <PlayCircleIcon fontSize='small' />
                            <p>Tv</p>
                        </div>
                        <div className=' text-[19px] flex gap-1 items-center justify-center'>
                            <QueryBuilderIcon fontSize='small' />
                            <p>24 min</p>
                        </div>
                        <div className=' text-[19px] flex gap-1 items-center justify-center'>
                            <CalendarMonthIcon fontSize='small' />
                            <p>July 7,2023</p>
                        </div>
                    </div>
                    <p className=' text-[15.2px] font-popins'>
                        Ten years have passed since the end of Bakumatsu, an era of war that saw the uprising of citizens against the Tokugawa shogunate. The revolutionaries wanted to create a time of peace, and a thriving country free from oppression. The new age of Meiji has come, but peace has not yet
                    </p>
                    <div className=' mt-8 flex gap-3'>
                        <button className=' flex gap-2 justify-center items-center bg-[#ffdd95] text-black py-2 px-4 rounded-[30px]'>
                            <PlayCircleFilledIcon />
                            Watch Now
                        </button>
                        <button className=' flex gap-2 justify-center items-center bg-[#56565b] py-2 px-4 rounded-[30px]'>
                            Detail 
                            <KeyboardArrowRightIcon/>
                        </button>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default PosterCarrousel