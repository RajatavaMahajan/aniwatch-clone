import React from 'react';
import { useNavigate } from 'react-router-dom';
import {HoverCard} from './index';
const TrendingAnimeCard = ({ anime, number }) => {
  const navigate = useNavigate();

  return (
  
      <div
      className='min-w-full min-h-full flex cursor-pointer shadow-md'
      onClick={() => navigate(`/watch/${anime.animeTitle}`, { state: anime })}
    >
      <div className='w-1/5 flex flex-col gap-[60px] items-center justify-end text-white'>
      <p className='transform -rotate-90 whitespace-nowrap'>{anime.animeTitle.slice(0, 13)}...</p>
      <span className='text-[#ffdd95] font-bold text-[24px]'>{`0${number}`}</span>       
      </div>


      <div className='w-4/5 relative min-h-full'>
  <img
    src={anime.animeImg}
    alt=''
    className='w-full h-full object-center'
    style={{ width: '100%', height: '100%' }}
  />
</div>
    </div>
  );
};

export default TrendingAnimeCard;
