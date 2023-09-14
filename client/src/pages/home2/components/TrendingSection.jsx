import React, { useState } from 'react';
import TrendingAnimeCard from './TrendingAnimeCard';
import { useHome2StateContext } from '../context';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
const TrendingSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { topAiringAnimes } = useHome2StateContext();
  const handleForward = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, 2));
  };

  const handleBackward = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };



  return (
    <div className='px-4 w-full h-full pb-2'>
      <p className='text-[22px] text-[#ffdd95] font-bold mb-8'>Trending</p>
      <div className='grid grid-cols-[95%,5%] gap-4'>
      <div className=" overflow-x-hidden overflow-y-visible ">
        <div className="">
          <div
            className=" flex transition-transform duration-500 w-full"
            style={{ transform: `translateX(-${currentIndex * (100 / 6)}%)` }}
          >
            {topAiringAnimes.slice(0, 8).map((anime, index) => (
              <div
                key={index}
                className=" flex-shrink-0 w-1/6 min-h-full"
              >
                <TrendingAnimeCard anime={anime} number={index + 1} />
              </div>
            ))}
          </div>
        </div>
      
      </div>
      <div className=' flex flex-col gap-2 px-4 pr-3'>
       <button
          onClick={handleBackward}
          className="carousel-button w-full h-1/2 rounded-lg bg-white bg-opacity-10 text-white flex items-center justify-center hover:bg-[#ffdd95] hover:text-black"
        >
          <KeyboardArrowLeftIcon fontSize='large'/>
        </button>
        <button
          onClick={handleForward}
          className="carousel-button w-full h-1/2 rounded-lg bg-white bg-opacity-10 text-white flex items-center justify-center hover:bg-[#ffdd95] hover:text-black"
        >
          <KeyboardArrowRightIcon fontSize='large'/>
        </button>
       </div>
      </div>
    </div>
  );
};

export default TrendingSection;
