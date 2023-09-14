import React,{useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom';
import { useWatchAnimeStateContext } from './context';
import { AnimeDetails,AnimeStream,EpisodeLists } from './components';
const WatchAnime = () => {
    const {state} = useLocation();
    const { setAnimeId,isLoading} = useWatchAnimeStateContext();
  useEffect(() => {
    setAnimeId(state.animeId);
  }, [state])

    if(isLoading){
      return <div>Loading...</div>
    }

    return (
    <div className=' w-full h-full'>
      <div className=' w-full h-screen flex gap-2 py-10 px-7'>
        <EpisodeLists/>
        <AnimeStream/>
        <AnimeDetails/>
      </div>
    </div>
  )
}

export default WatchAnime