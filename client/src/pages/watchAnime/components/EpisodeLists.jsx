import React, { useState } from 'react';
import { useWatchAnimeStateContext } from '../context';
import SearchIcon from '@mui/icons-material/Search';

const EpisodeLists = () => {
  const [inputValue, setInputValue] = useState('');
  const { currentEpisodeNo, setCurrentEpisodeNo, animeDetails } = useWatchAnimeStateContext();
  
  const handleKeydown = (event) => {
    if (event.key === "Enter") {
      if (animeDetails.totalEpisodes >= inputValue) {
        setCurrentEpisodeNo(inputValue);
        setInputValue('');
      }
    }
  }

  return (
    <div className='w-1/4 bg-[#14151a] h-full overflow-y-auto overflow-x-hidden flex flex-col gap-6 p-4'>
      <div className=' flex items-center justify-between text-white'>
        <p className=' font-bold text-[14px]'>List Of Episodes :</p>
        <div className=' flex text-[13px] items-center justify-center gap-0 border border-gray-50 border-opacity-20 rounded-md px-2 py-1'>
          <SearchIcon sx={{ width: '12px', height: '12px', opacity: '.8' }} />
          <input 
            type="number" 
            value={inputValue} 
            placeholder='Episode Number' 
            className=' bg-transparent pl-4 focus:outline-none appearance-none' 
            onChange={(e) => setInputValue(e.target.value)} 
            onKeyDown={handleKeydown} 
          />
        </div>
      </div>
      <div className='min-w-full grid grid-cols-5 gap-2'>
        {animeDetails.episodesList.slice().reverse().map((ep) => (
          <div
            key={ep.episodeId}
            className={`${currentEpisodeNo == ep.episodeNum
                ? 'bg-[#ffdd95] bg-opacity-100 text-black'
                : 'bg-white text-gray-200 hover:bg-opacity-25'
              } bg-opacity-10 flex items-center justify-center rounded w-16 h-8 cursor-pointer ${inputValue == ep.episodeNum && ' bg-[#ffdd9590] text-black'}`}
            onClick={() => setCurrentEpisodeNo(ep.episodeNum)}
          >
            {ep.episodeNum}
          </div>
        ))}
      </div>
    </div>

  );
}

export default EpisodeLists;
