import React from 'react'
import AnimeCard from './AnimeCard'
import { useHome2StateContext } from '../context'
const AnimeChart = () => {
    const {topAiringAnimes} = useHome2StateContext();
  return (
    <div className=' grid grid-cols-4'>
        <div className=' flex flex-col px-4 gap-2'>
            <p className=' text-[22px] text-[#ffdd95] font-bold'>Top Airing</p>
            <div className=' px-2'>
                {topAiringAnimes.slice(0,5).map(anime=>{
                    return <AnimeCard animeDetails={anime}/>
                })}
            </div>
        </div>
        <div className=' flex flex-col px-4 gap-2'>
            <p className=' text-[22px] text-[#ffdd95] font-bold'>Top Airing</p>
            <div className=' px-2'>
                {topAiringAnimes.slice(0,5).map(anime=>{
                    return <AnimeCard animeDetails={anime}/>
                })}
            </div>
        </div>
        <div className=' flex flex-col px-4 gap-2'>
            <p className=' text-[22px] text-[#ffdd95] font-bold'>Top Airing</p>
            <div className=' px-2'>
                {topAiringAnimes.slice(0,5).map(anime=>{
                    return <AnimeCard animeDetails={anime}/>
                })}
            </div>
        </div>
        <div className=' flex flex-col px-4 gap-2'>
            <p className=' text-[22px] text-[#ffdd95] font-bold'>Top Airing</p>
            <div className=' px-2'>
                {topAiringAnimes.slice(0,5).map(anime=>{
                    return <AnimeCard animeDetails={anime}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default AnimeChart