import React, {useState,useEffect} from 'react'

const TopAnime = () => {
    const [topAnime, setTopAnime] = useState([]);
    useEffect(() => {
    fetch("http://localhost:3000/popular")
    .then((response) => response.json())
    .then((animelist) => setTopAnime(animelist));
        
    }, [])
  return (
    <div className=' text-[14px]'>
        <span className=' font-bold'>Top Anime : </span>
        {topAnime.slice(0,6).map(anime=>{
            return(
                <span className=' opacity-70' key={anime.animeId}>{anime.animeTitle}</span>
            )
        })}
        <span className='opacity-70'>...</span>
    </div>
  )
}

export default TopAnime