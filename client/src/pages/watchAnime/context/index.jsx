import { createContext , useState,useEffect, useContext } from "react";
const WatchAnimeContext = createContext();

export const WatchAnimeContextProvider = ({children})=>{
  const [animeDetails, setAnimeDetails] = useState(null);
  const [animeId, setAnimeId] = useState(null);
  const [currentEpisodeNo, setCurrentEpisodeNo] = useState(1);
  const [epUrl, setEpUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
      const controller = new AbortController();
      const signal = controller.signal;
      if(animeId){
        const updateAnimeDetails = async(animeId)=>{
          const anime = await fetch(`http://localhost:3000/anime-details/${animeId}`,{signal})
                .then(res=>res.json())
                .then(data=>data);
                setAnimeDetails(anime); 
                setIsLoading(false);
                                            
        }
        updateAnimeDetails(animeId)
      }
      return ()=>{
        controller.abort();
      }
    },[animeId])
    useEffect(()=>{
      const controller = new AbortController();
      const signal = controller.signal;
      if(animeDetails){
        const getEpisodeUrl = async() =>{
          setEpUrl(null);
          console.log(currentEpisodeNo);
          const currentEpisodeId = animeDetails.episodesList.find(ep=>ep.episodeNum==currentEpisodeNo).episodeId;     
          const episodeUrl = await fetch(`http://localhost:3000/vidcdn/watch/${currentEpisodeId}`,{signal})
                .then(res=>res.json())
                .then(data=>data.sources[0].file);
                console.log(episodeUrl);
                setEpUrl(episodeUrl);
        }
        getEpisodeUrl();
      }
      return ()=>{
        controller.abort();
      }
    },[currentEpisodeNo,animeDetails])
   
    return (
        <WatchAnimeContext.Provider value={{animeId, setAnimeId,isLoading,animeDetails,currentEpisodeNo, setCurrentEpisodeNo,epUrl}}>                 
          {children}
        </WatchAnimeContext.Provider>
      )
}

export const useWatchAnimeStateContext = () => useContext(WatchAnimeContext);

