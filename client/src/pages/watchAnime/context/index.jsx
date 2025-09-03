import { createContext, useState, useContext } from "react";
const WatchAnimeContext = createContext();

export const WatchAnimeContextProvider = ({ children }) => {
  const [animeId, setAnimeId] = useState(null);
  const [currentEpisodeNo, setCurrentEpisodeNo] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Static anime details
  const animeDetails = {
    animeTitle: "Attack on Titan",
    animeImg: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400",
    totalEpisodes: 24,
    episodesList: Array.from({ length: 24 }, (_, i) => ({
      episodeId: `episode-${i + 1}`,
      episodeNum: i + 1
    }))
  };

  // Static video URL (sample video)
  const epUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  return (
    <WatchAnimeContext.Provider
      value={{
        animeId,
        setAnimeId,
        isLoading,
        animeDetails,
        currentEpisodeNo,
        setCurrentEpisodeNo,
        epUrl,
      }}
    >
      {children}
    </WatchAnimeContext.Provider>
  );
};

export const useWatchAnimeStateContext = () => useContext(WatchAnimeContext);
