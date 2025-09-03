import { createContext, useState, useContext } from "react";

const Home2Context = createContext();

export const Home2ContextProvider = ({ children }) => {
  const topAiringAnimes = [
    {
      animeId: "attack-on-titan",
      animeTitle: "Attack on Titan",
      animeImg: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      animeId: "demon-slayer",
      animeTitle: "Demon Slayer",
      animeImg: "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      animeId: "one-piece",
      animeTitle: "One Piece",
      animeImg: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      animeId: "naruto",
      animeTitle: "Naruto",
      animeImg: "https://images.pexels.com/photos/8088501/pexels-photo-8088501.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      animeId: "dragon-ball-z",
      animeTitle: "Dragon Ball Z",
      animeImg: "https://images.pexels.com/photos/7991580/pexels-photo-7991580.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      animeId: "my-hero-academia",
      animeTitle: "My Hero Academia",
      animeImg: "https://images.pexels.com/photos/8088496/pexels-photo-8088496.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      animeId: "jujutsu-kaisen",
      animeTitle: "Jujutsu Kaisen",
      animeImg: "https://images.pexels.com/photos/7991226/pexels-photo-7991226.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      animeId: "tokyo-ghoul",
      animeTitle: "Tokyo Ghoul",
      animeImg: "https://images.pexels.com/photos/8088497/pexels-photo-8088497.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <Home2Context.Provider value={{ topAiringAnimes }}>
      {children}
    </Home2Context.Provider>
  );
};

export const useHome2StateContext = () => useContext(Home2Context);
