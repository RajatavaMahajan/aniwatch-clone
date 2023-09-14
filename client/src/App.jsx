import React from 'react';
import { Home, Home2, WatchAnime } from './pages/index';
import { Route, Routes } from 'react-router-dom';
import { WatchAnimeContextProvider } from './pages/watchAnime/context';
import { Home2ContextProvider } from './pages/home2/context';

const App = () => {
  return (
    <div className='font-popins'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home2ContextProvider><Home2 /></Home2ContextProvider>} />
        {/* Wrap the specific route component with the context provider */}
        <Route path='/watch/:id' element={<WatchAnimeContextProvider><WatchAnime /></WatchAnimeContextProvider>} />
      </Routes>
    </div>
  );
}

export default App;
