import { createContext , useState,useEffect, useContext } from "react";

const Home2Context = createContext();

export const Home2ContextProvider = ({children})=>{
    const [topAiringAnimes, setTopAiringAnimes] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/top-airing")
            .then((response) => response.json())
            .then((animelist) => setTopAiringAnimes(animelist));
    },[])
    return (
        <Home2Context.Provider value={{topAiringAnimes}}>                 
          {children}
        </Home2Context.Provider>
      )
}

export const useHome2StateContext = () => useContext(Home2Context);

